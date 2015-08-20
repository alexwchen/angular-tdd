var assert = chai.assert;
var expect = chai.expect;

describe("The Address Book App", function(){

  // testing angular service
  describe("The Contact Services", function(){

    // everything in this block will be called before any test case
    beforeEach(function(){
      // load everything in the module in our test case
      module('AddressBook');
      // inject the function into the test case
      inject(function($injector){
        contactService = $injector.get("contactService");
        $httpBackend = $injector.get("$httpBackend");

      });

    })

    // test case 1
    it("should work",function () {
      chai.assert.isArray([]);
    })

    // test case 2
    it("should have a property contacts, an array",function(){
      // to see if we can see the expected value
      expect(contactService.contacts).to.be.an('array');
    })

    // test case 3: http
    it("should call the backend", function(){

      // this is how you expect a get call, and you need the response, otherwise there will be error
      $httpBackend.expectGET("http://localhost:9001/contacts")
        .respond(200,[]);

      // flush will detect all kind of http request ( it will know get is being called, therefore you need to expect it in your test)
      $httpBackend.flush();
    })

  })

  // testing angular controller
  describe("the contact controller",function(){
		beforeEach(function(){
			module('AddressBook');

			inject(function($injector,$rootScope){
        // load scope
				$scope = $rootScope.$new(); // a special version of the scope we pass to test that contorller
				contactService = $injector.get("contactService");  // load the service
				$httpBackend = $injector.get("$httpBackend");
				$controller = $injector.get("$controller"); // load the controller
			})
		})

		it ("should store an array of contacts in scope",function(){
			$controller("ContactController",{$scope:$scope,contactService:contactService});
			assert.isArray($scope.contacts); // check if an array is stored to this variable
		})
	})

  describe("the proper filter",function(){
    beforeEach(function(){
      module("AddressBook");
      inject(function($injector){
        proper = $injector.get("$filter")("proper");
      });
    })

    // make sure when you test, also test for opposite (failure) case so you don't get false positive
    it ("should proper case a string",function(){
      expect(proper("ned stark")).to.equal("Ned Stark");
      expect(proper("cersei lannister")).to.equal("Cersei Lannister"); // fail case: Cersei lannister
    });

    it ("should take a number and return that as a string",function(){
      expect(proper(42)).to.equal("42"); // failcase 42
    })

    // this is how you test expectional handling
    it ("should throw an error on an incompatible type",function(){
      assert.throws(function(){
        proper(undefined)
      });
    })
  })


})
