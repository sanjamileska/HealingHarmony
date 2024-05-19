import React from 'react';
import './ResourceDirectory.css';


class ResourceDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showResources: false
    };
    this.toggleResources = this.toggleResources.bind(this);
  }

  toggleResources() {
    this.setState(prevState => ({
      showResources: !prevState.showResources
    }));
  }

  render() {
    return (
      <div className="resource-directory">
        <h2>Mental Health Resources</h2>
        <button onClick={this.toggleResources}>Show Resources</button>
        {this.state.showResources && <ResourceList />}
      </div>
    );
  }
}

class ResourceList extends React.Component {
  render() {
 
    const mentalHealthResources = [
      {
        title: "National Suicide Prevention Lifeline",
        description: "A national network of local crisis centers that provides free and confidential emotional support to people in suicidal crisis or emotional distress 24 hours a day, 7 days a week.",
        contact: "1-800-273-TALK (8255)"
      },
      {
        title: "SAMHSA National Helpline",
        description: "SAMHSA's National Helpline is a free, confidential, 24/7, 365-day-a-year treatment referral and information service (in English and Spanish) for individuals and families facing mental and/or substance use disorders.",
        contact: "1-800-662-HELP (4357)"
      },

    ];

    return (
      <div className="resource-list">
        {mentalHealthResources.map((resource, index) => (
          <div key={index} className="resource-item">
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
            <p>Contact: {resource.contact}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ResourceDirectory;