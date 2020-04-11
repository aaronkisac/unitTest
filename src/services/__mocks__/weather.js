const fakeData = { temp: 300, humidity: 55, desc: "Clouds", location: "Bagcilar" }

export default async (city = "London") => {
    console.log('tg..weather_mock');

    const data = Promise(resolve => {
        resolve(fakeData)
    });
    return data; 
}