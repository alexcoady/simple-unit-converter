/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'home section', function() {
  beforeEach( module( 'ngBoilerplate.home' ) );

  it( 'should have a dummy test', inject( function() {
    expect( true ).toBeTruthy();
  }));

  it( 'should have a test defined by alex', inject( function () {
    expect( false ).toBe( false );
  }));
});