
const ncellButton = document.getElementById('ncellButton');
const karkhanaButton = document.getElementById('karkhanaButton');
const anotherNcellButton = document.getElementById('shreeChalantarButton');
const informationDiv = document.getElementById('information');



// Add event listeners to the buttons
ncellButton.addEventListener('click', function () {
    informationDiv.innerHTML = `
    <p>Front End Intern                              (  May 2023-July2023
        )
    <ul>
        <li>Identified compatibility gaps on the website when accessed on smaller screen devices and took proactive measures to address them effectively. Employed responsive design techniques and optimized the user interface to guarantee a seamless and intuitive user experience across all screen sizes, ultimately enhancing accessibility and usability.  
        </li>
        <li> Performed comprehensive cross-browser testing and executed targeted optimizations to enhance overall performance and elevate user experience.

</li>
       
    </ul>
    
`
});

karkhanaButton.addEventListener('click', function () {
    informationDiv.innerHTML = `<p>STEAM Intern ( June 2022-July2022
        )
    <ul>
        <li>Designed curriculum and conducted weekly online classes for middle school students in Nepal through a collaborative educational program with Tufts Center for Engineering Education and Outreach</li>
        <li>Facilitated student projects on engineering principles including programming arduino boards and creating real world technological applications.
        /li>
       
    </ul>
    
`
});

shreeChalantarButton.addEventListener('click', function () {
    informationDiv.innerHTML = `<p>Volunteer Teacher  (July 2019-Jan 2020)</p>
    <ul>
        <li>Designed engaging lesson plans to foster understanding of fundamental programming concepts and encouraged hands-on learning through interactive exercises and projects.</li>
        <li>Provided additional assistance and one-on-one tutoring to students who required extra support in comprehending challenging concepts in Computer Science and English.</li>
        
    </ul>
    
`
});

ncellButton.click();
