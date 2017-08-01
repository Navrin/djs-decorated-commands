import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

@suite
class Decorators {
    @test('stuff will not explode')
    exploder() {
        expect(true).to.eq(true);
    }
}

export {
    Decorators,
}
