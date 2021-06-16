 var final_response ={data: {
    Events: [{year: 2020, text: "Corona Virus Attack"}, {year: 2010, text: "Gitanjali Born"},{year: 2016, text: "Leap Year"},{year: 2016, text: "Leap Year"},{year: 2016, text: "Leap Year"}]
                            }}
console.log(final_response.data.Events)
for(let i=0; i<final_response.data.Events.length; i++)
{
    final_response.data.Events[i].text
    console.log(final_response.data.Events[i].text)
}