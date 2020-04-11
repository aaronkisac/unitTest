import React from "react";
import { shallow, mount } from "enzyme";
import Double from "../components/Double";

function setup(num=0) {
  const fnc = jest.fn();
  const wrapper = shallow(<Double initialNum={24} calculateDouble={fnc} />);
  return { wrapper, fnc };
}

describe("test", () => {
  it("test not working", () => {
    expect(2).toBe(2);
  });
});

// describe("Double component Cases", () => {
//   it("Check All Attributes", () => {
//     const { wrapper, fnc } = setup();
//     expect(wrapper).toHaveLength(1);
//   });

  
//   //? BEN BURADA CLİCKLEMEDİĞİM HALDE SONUCU 44 GOSTERIYOR? 
//   it("click button", () => {
    
//     const { wrapper, fnc } = setup(0);
    
//     const input1 = wrapper.find("input");
//     input1.simulate('change', {target: {value: '22'}});

//     console.log('tg..input1:',input1.html());
//     const button1 = wrapper.find("button");
//     button1.simulate("click");

//     expect(fnc.mock.calls.length).toBe(1);

    
//     const result = wrapper.find("label").text();
//     console.log('tg..result:', result)
//     expect(result).toBe("44");
//   });

// });


// it("should title-2 is true", () => {
//   const wrapper = shallow(<Double initialNum={32} />);

//   expect(wrapper.find("h5.title2").text()).toBe(" unit test title2")
//   expect(wrapper.find("h5.title1").text()).toEqual(" unit test title1")
// })  


// it("renders with shallow correctly", () => {
//   const wrapper = shallow(<Double initialNum={33} />)
//   expect(wrapper).toMatchSnapshot();
// });

// //? BEN BURADA CLICK EVENTINI SIMULE ETMEDIGIM HALDE LABEL.text'de inputun 2 katı geliyor. 
// it("label text gives correct value ", () => {
//   const wrapper = mount(<Double initialNum={44} />)
//   const text = wrapper.find("label").text(); //Enzyme ile bir elemente ulaşmak.
//   console.log("text:", text)
//   expect(text).toBe("88");
// });