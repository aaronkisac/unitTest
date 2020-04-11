import React from 'react';
import { shallow, mount } from 'enzyme';
import WeatherShow from '../components/WeatherShow';

const fakeData = {
    desc: 'Clouds',
    name: 'maslak',
    main: {
        temp: 300,
        humidity: 55,
    },
    weather: [{ main: 'Rain' }],
};

const mockWeather = async (city = 'London') => {
    console.log('tg..weather_mock');

    const data = new Promise((resolve) => {
        resolve(fakeData);
    });
    return data;
};

it('app works and renders correctly', (done) => {
    const wrapper = shallow(<WeatherShow weather={mockWeather} />);

    console.log(wrapper.find('h1.main').text());
    console.log(wrapper.hasClass('main'));

    const form = wrapper.find('form');

    form.simulate('submit', {
        preventDefault: () => {},
    });

    setTimeout(() => {
        //SETTIMEOUT HEP ASYNC BİTENE KADAR BEKLER. AMA O BİTMEDEN ÖNCE RENDER İŞLEMİ BİTMİŞTİ.
        wrapper.update(); //O YÜZDEN ASYNC BİTTİKTEN SONRA TEKRAR COMPONENTI UPDATE YAPTIK...

        expect(wrapper.find('h1.main')).not.toBe(null);
        expect(wrapper.find('h1.outLocation').text()).toBe('location: maslak');

        done(); //EN SONDA BU DONE FONKSİYONUNU CALL ETMELİSİN.
    }, 1000);

    //expect(wrapper.find('h1.outLocation').text()).toBe("location: ");

    // setTimeout(() => {   //SETTIMEOUT HEP ASYNC BİTENE KADAR BEKLER. AMA O BİTMEDEN ÖNCE RENDER İŞLEMİ BİTMİŞTİ.
    //     wrapper.update() //O YÜZDEN ASYNC BİTTİKTEN SONRA TEKRAR COMPONENTI UPDATE YAPTIK...

    //     expect(wrapper.find('h1.outLocation').text()).toBe("location: ");

    //     expect(wrapper.find('h1.outLocation').length).toBe(1); //O ELEMANDAN KAÇ TANE OLDUĞUNU LENGTH İLE BULURUZ.
    //     expect(wrapper.find("h1").first().text()).toBe("my WeatherShow");
    //     expect (wrapper.find("h2.outTemp").text()).toBe("temp: ");
    //     done(); //EN SONDA BU DONE FONKSİYONUNU CALL ETMELİSİN.
    //})
});

// setTimeout(() => {   //SETTIMEOUT HEP ASYNC BİTENE KADAR BEKLER. AMA O BİTMEDEN ÖNCE RENDER İŞLEMİ BİTMİŞTİ.
//     wrapper.update() //O YÜZDEN ASYNC BİTTİKTEN SONRA TEKRAR COMPONENTI UPDATE YAPTIK...

//     expect(wrapper.find('h1.outLocation').text()).toBe("location: ");

//     expect(wrapper.find('h1.outLocation').length).toBe(1); //O ELEMANDAN KAÇ TANE OLDUĞUNU LENGTH İLE BULURUZ.
//     expect(wrapper.find("h1").first().text()).toBe("my WeatherShow");
//     expect (wrapper.find("h2.outTemp").text()).toBe("temp: ");
//     done(); //EN SONDA BU DONE FONKSİYONUNU CALL ETMELİSİN.
