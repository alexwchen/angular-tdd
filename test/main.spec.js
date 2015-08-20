var assert = chai.assert;
var expect = chai.expect;

describe("The Address Book App", function(){
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
})
