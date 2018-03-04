# Debug in chrome debugger tool 

Debug chrome => inspect -> webpack -> . -> src -> app

# other methods 

Augury

add "debugger" in the code and run and test in browser

user pipe Async to out put data in browser & var | JSON

Set break point in Vcode and add the config.json as below

To debug RxJs, use "do" operator within RX

shift + alt + down arrow => copy set of code

## Test file format : spec.ts

cmd => ng test

describe() // suite (funcation to call)

it()  //spec ( to do test)

## Sample code test

describe('compute', () => {

     it('test name', () => {

     });
   });

## Concept of Unit testing

// Arrange

let classobj = new classobj()
// Act

classobj.membername();
// Assert

expect(classobj.membervariable).toBe()

## *** set up & tear down ****

While initalizing object in testing mode, object has to be recreated every time for that we need to use

** setup
beforeEach(() => { object initliazation, obj = new obj() });

similarly to clean up

** tear down
afterEach(() => {});

similarly 

beforeAll () executed once before all test & afterAll()

## spies &  Interaction  testing

spyon() // to spy on method in a class


  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

 spyOn(service, 'getTodos').and.callFake(() => {
       return Observable.from([ [1, 2, 3] ]);
    });

  component.ngOnInit();

 ## Interaction testing

add() { 
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

## Code Coverage

ng test --code-coverage

## Disable Unit testing 
To disable a test put x

xit('te be tested', () => {} )
