import React, { Component } from "react";
import ExperienceEntry from "./ExperienceEntry";


class Experience extends Component {
  render () {
    return (
      <div className="section-dark experience-page">
      <div className="section-content" id="experience" style={{width: '100%'}}>
      <h3>Experiences</h3>
      <br/>
      <ExperienceEntry
      position="Web Devloper"
      company="Maryland Institute of Transportation"
      location="College Park, MD"
      time="June 2019 - Present"/>
      <ExperienceEntry
      position="IT Department Leader"
      company="Chinese Students and Scholars Association"
      location="College Park, MD"
      time="September 2018 - Present"
      description={
        <ul>
          <li>Redesign the website, improve website appearance with HTML and CSS, increased website visits to average 60 /day.</li>
          <li>Edit promotion and summary videos and publish on public YouTube channel.</li>
          <li>Developing a mobile app for the organization using Xcode and Swift with a team of 4.</li>
          </ul>
        }/>
      <ExperienceEntry
      position="QA Intern"
      company="Symbio Information Technology and Services"
      location="Hangzhou, China"
      time="June - August 2018"
      description={
        <ul>
          <li>Built and maintained testing environment, used VMware Workstation to set up virtual machine</li>
          <li>Designed test cases for the KRIS Record Management System, created test case templates for future company uses</li>
          <li>Conducted unit tests and integration tests and ensured successful new version releases every other week</li>
          <li>Communicated test results with the development team and the support team, used communication skills to improve work efficiency in the office</li>
          </ul>
        }
      />
      </div>
      </div>
    );
  }
}

export default Experience;
