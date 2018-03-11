import { TodosComponent } from "./todos.component";
import { TodoService } from "./todo.service";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/observable/empty";
import "rxjs/add/observable/throw";

describe("Http Service Unit testing", () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it("Items retured from the service call to server check", () => {
    spyOn(service, "getTodos").and.callFake(() => {
      return Observable.from([[1, 2, 3]]);
    });

    component.ngOnInit();
    // expect(component.todos.length).toBeGreaterThan(1);
    expect(component.todos.length).toBe(3);
  });

  it("should call the server when new data is added", () => {
    let spy = spyOn(service, "add").and.callFake(() => {
      return Observable.empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it("should push returned value from the server", () => {
    let result = { id: 1};
    spyOn(service, "add").and.returnValue(Observable.from([result]));

    component.add();

    expect(component.todos.indexOf(result)).toBeGreaterThan(-1);
  });

  it("Should show message when server return failure status", () => {
    let errorMsg = "server error";
    spyOn(service, "add").and.returnValue(Observable.throw(errorMsg));

    component.add();

    expect(component.message).toBe(errorMsg);
  });

  it("should call server to delete a item when called with delete item id", () => {

    spyOn(window, 'confirm').and.returnValue(true);
    let spyServer = spyOn(service, "delete").and.returnValue(Observable.empty());

    component.delete(1);

    expect(spyServer).toHaveBeenCalledWith(1);
  });

  it("should Not call delete item when user doesnt confirm", () => {

    spyOn(window, 'confirm').and.returnValue(false);
    let spyServer = spyOn(service, "delete").and.returnValue(Observable.empty());

    component.delete(1);

    expect(spyServer).not.toHaveBeenCalled();
  });
});
