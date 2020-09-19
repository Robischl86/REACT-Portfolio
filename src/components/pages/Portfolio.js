import React from "react";
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'


function Portfolio() {
  return (
    <div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src='https://github.com/Robischl86/UWBCH3_Random_Password_Generator/blob/master/screenshot.jpg?raw=true' />
          <Card.Body>
            <Card.Title>Password Generator</Card.Title>
            <Card.Text>
              This is a random password generator that was created as an assignment for the University of Washington Coding Bootcamp. When initiated, the application prompts the user to answer a series of questions regarding their password preferences, such as character length and character types.
              The random password generator was completed and uploaded to GitHub on April 29, 2020. It uses standard Javascript code and CSS styling.
      </Card.Text>
            <Card.Link href="https://robischl86.github.io/UWBCH3_Random_Password_Generator/">Link</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src='https://github.com/Robischl86/OpenWeather-Forecast-Dashboard/blob/master/screenshot.png?raw=true' />
          <Card.Body>
            <Card.Title>Weather Dashboard</Card.Title>
            <Card.Text>
              The Weather Dashboard is an application that will present the current and five-day forecast weather information of any city that the user enters into a search form. The application saves the name of each city and appends it as a button that the user can use to quickly find the weather for that location.
              The Weather Dashboard was completed on May 7, 2020. It uses a JSON query to pull the weather data from the OpenWeather API. The styling was done with the Bootstrap CSS library
      </Card.Text>
            <Card.Link href="https://robischl86.github.io/OpenWeather-Forecast-Dashboard/">Link</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src='https://github.com/Robischl86/Software-Engineering-Team-Generator-CLI/blob/master/screenshot.png?raw=true' />
          <Card.Body>
            <Card.Title>Team Roster Builder</Card.Title>
            <Card.Text>
              This is a software engineering team generator command line application. It will prompt the user for information about the team manager and then the team members and then generate an HTML file that displays the team roster.
              It runs as a Node CLI and requires inquirer to collect information.
      </Card.Text>
            <Card.Link href="https://github.com/Robischl86/Software-Engineering-Team-Generator-CLI">Link</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src='https://robischl86.github.io/GitHub_Portfolio/Assets/Images/readmeGenerator.png' />
          <Card.Body>
            <Card.Title>Readme Generator</Card.Title>
            <Card.Text>
            This application uses the Node.js File System and Inquirer modules to create a clean and responsive readme file based. After running the script in the node terminal, the user is presented with a series of prompts relating to their project. The application then writes the information into a markdown file to be used as the user's readme.
      </Card.Text>
            <Card.Link href="https://github.com/Robischl86/Readme-Generator">Link</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src='https://robischl86.github.io/GitHub_Portfolio/Assets/Images/tripSafe.png' />
          <Card.Body>
            <Card.Title>Trip Safe</Card.Title>
            <Card.Text>
            This application API calls to display Covid-19 cases and fatality rates in different states in the US and links users to hotel booking sites for cities in the US.
      </Card.Text>
            <Card.Link href="https://github.com/Jose-lco/Project2">Link</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src='https://raw.githubusercontent.com/Robischl86/Online-Offline-Budget-Tracker/master/screenshot.png' />
          <Card.Body>
            <Card.Title>Online/Offline Budget Tracker</Card.Title>
            <Card.Text>
            Users running this application will create an indexed database containing budgetary data including transactions, dollar amounts, and historical statistics. Users can enter new data while offline, which will then be stored when the application is online again.
      </Card.Text>
            <Card.Link href="https://glacial-dawn-12338.herokuapp.com/">Link</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card>
          <Card.Img variant="top" src='https://github.com/Robischl86/Express-Note-Taker/raw/master/screenshot.png?raw=true' />
          <Card.Body>
            <Card.Title>Express Note Taker</Card.Title>
            <Card.Text>
            Users will write, save, and delete notes through an express backend by saving and retrieving data from a JSON file. Once the application is executed, users will access the note taker through localhost:8080. Users can click the pencil icon to create a new note with a title and body of text, and then click the save icon to save the note to a JSON file. All saved notes will be displayed by their titles on the sidebar, and can be quickly accessed by clicking on them. Users can delete these notes by clicking the red delete icon next to the title in the sidebar.
      </Card.Text>
            <Card.Link href="https://infinite-forest-86943.herokuapp.com/">Link</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src='https://github.com/Robischl86/Node-Express-Handlebars-Burger-App/raw/master/screenshot.png?raw=true' />
          <Card.Body>
            <Card.Title>Node Express Handlebars Burger App</Card.Title>
            <Card.Text>
            Users will enter the name of a new hamburger in the text field. Based on the radio button selection, the item will render in one of two categories: devoured or not-devoured. If a hamburger is not devoured, users can click to either devour or delete the hamburger. If a hamburger is devoured, users can either delete the object or order another.
      </Card.Text>
            <Card.Link href="https://pacific-woodland-47766.herokuapp.com/">Link</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src='https://github.com/Robischl86/MySQL-Employee-DB-Management/raw/master/screenshot.png?raw=true' />
          <Card.Body>
            <Card.Title>MySQL Employee DB Management</Card.Title>
            <Card.Text>
            This is a Node application that will allow users to manage an employee database through the MySQL workbench.
      </Card.Text>
            <Card.Link href="https://github.com/Robischl86/MySQL-Employee-DB-Management">Link</Card.Link>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>

  );
}

export default Portfolio;
