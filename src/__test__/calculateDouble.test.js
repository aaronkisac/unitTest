import {calculateDouble} from '../components/calculateDouble'

describe("function runs", () => {
    const dataset = [[2,4], [5,10], [32,64]];
    
    test.each(dataset)("should calculate double", (input, output) => {
        const resp = calculateDouble(input);
        expect(resp).toBe(output);
    });

});