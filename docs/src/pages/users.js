import React from 'react';

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const showcase = siteConfig.users.map((user) => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.image} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
          <div className="showcaseSection">
            <div className="prose">
              <h1>Who is Using This?</h1>
              <p>This project is used by many folks</p>
            </div>
            <div className="logos">{showcase}</div>
            {siteConfig.repoUrl && (
              <React.Fragment>
                <p>Are you using this project?</p>
                <a
                  href={`${siteConfig.repoUrl}/edit/master/website/siteConfig.js`}
                  className="button">
                  Add your company
                </a>
              </React.Fragment>
            )}
          </div>
      </Layout>
    );
  }
}

export default Users;
