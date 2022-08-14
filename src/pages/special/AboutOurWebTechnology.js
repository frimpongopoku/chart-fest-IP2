import React from "react";

function AboutOurWebTechnology() {
  return (
    <div className="window-sizing">
      <h3 className="page-subtitle">React JS</h3>

      <p className="text">
        Typically, websites contain 3 core parts. Simple HTML pages, CSS files,
        and Javascript files. The HTML files are mostly blunt layouts of
        components that every browser understands. CSS (Cascading stylesheets)
        contain custom design patterns that are understood by the browser, and
        go hand-in-hand with html files, to present a pleasing front to users.
        Javascript files then contain logic that handles user interactions on
        the page. These three, work together to form the frontend of an
        application. As web development has grown over the past few years,
        websites have become more complex, and has resulted in innovative
        systems that make building complex systems easier. Such innovative
        systems cover all aspects of web development and have made development
        pleasant, fast, and yielded better applications. Some of these systems
        include React, Angular, Vue, Django, Laravel etc.
        <br />
        <br />
        Noticing the trends, the team decided to employ the use of a frontend
        web-technology such as React in building this application. As a team, we
        noticed that the site could have been built with simple HTML files, with
        css and javascript files. <br />
        However, such a structure would have resulted in an application that was
        not in line with most of the team's core expectations.
      </p>
      <h3 className="page-subtitle">Team Expectations</h3>
      <p className="text"> As a team, our expectations were as follows:</p>
      <ul className="app-ul">
        <li>Fast load speeds </li>
        <li>
          Easy implementation of user friendly design flows and neat
          interactivity{" "}
        </li>
        <li>
          A system that allows easy modifications when there is a need to build
          on, or change parts of the application{" "}
        </li>
        <li>A future proof system</li>
      </ul>
      <p className="text">
        The expectations listed above would have incredibly slowed down the
        development pace, and resulted in a convoluted system if implemented
        with simple HTML , CSS, and Javascript files. As such, React was chosen;
        a verdict that was backed by vast research. Our research declared React
        JS, the most suitable system to aid the team in nearing it's
        expectations.
        <br />
        Unlike the normal architecture of a 3-piece system in the previous
        generation of web development, where elements of the application
        interface needs to be tracked and manually updated in order to implement
        interactivity in javascript. The React library completely takes charge
        of the DOM and makes it easy to manipulate all parts of the application
        in the easiest way possible. A react application is a combination of
        different components. Where each component has a defined state. With any
        change in the properties of a component, the React Library forces the
        affected part of the application to re-render, in order to display the
        latest changes of the application.
        <br />
        <br />
        For instance, in order to implement some aesthetic effect to a button
        based on a certain state of the application; say a red button when a the
        application is in its loading state? The team would have had to identify
        the button with a unique ID, target it in Javascript and then
        manipulated the style of the particular button into the desired state.
        With a single button, the process is manageable. However, with multiple
        buttons and a few other button states to deal with, tracking each
        element on a page becomes tedious and convoluted. Fortunately with a
        system such as React, the team is able to update the properties of all
        elements by simply updating values in the state, which in turn cause a
        chain reaction of updates to easily implement all changes at once.
      </p>
      <h3 className="page-subtitle">Extract</h3>
      <p className="text">
        Once again, consider a scene where a couple of styles had to be applied
        to a button element. With the structure given below, the style object
        could be used by 40 or more other buttons, and if there was a need to
        change the background and font-size for all the 40 buttons, all that
        would be done, is to update the value of "style" with the new style
        object using setState(newStyle) in order to propagate all the need
        changes immediately. Not using a frontend framework such as react, would
        require such a change to be implement 40 times for every reference to
        the button the team needs to change.
      </p>

      <div className="code-extract">
        {`const [style, setStyle] = useState({background:"red", fontSize:15})


.... 
return ( 
    <button style = {style}> Click me </button>
)`}
      </div>

      <p className="text">
        Furthermore, using React enabled the team to create modular HTML
        templates that were repeatedly reused for content that have the same
        structure. You can see this in action with the sidebar items in may
        areas of our application. Here are a few examples in the following
        files: Sidebar.js , Overview.js, and App.js. <br />
        <br />
        Finally, the use of React allowed the application to be compressed into
        a neat downloadable bundle that allows for easy loading on the client
        side. You will notice that after the first time you load on to our site,
        any routes visited appears immediately. This is because page request in
        our application is not made to a server, it is intercepted by the React
        Router, which loads up any component that is mapped to such a link, as
        our app is completely built in Javascript. This provides a seamless
        experience when our users navigate around various parts of the
        application -- a user only has to wait once, in our app.
      </p>
    </div>
  );
}

export default AboutOurWebTechnology;
