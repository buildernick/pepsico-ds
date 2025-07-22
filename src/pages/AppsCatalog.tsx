import React from "react";
import {
  Button,
  Card,
  Filter,
  Search,
  Tab,
  TabsNavigation,
  Tag,
} from "pepsico-ds";
import styles from "./AppsCatalog.module.css";

const AppsCatalog: React.FC = () => {
  const appCards = Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
    tags: ["Time", "Management", "Report", "+3"],
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/a3ee5622c98ec1c345edcbe4c5f0c6e708b1b489?width=128"
  }));

  const emptyCards = Array.from({ length: 3 }, (_, index) => ({
    id: index + 7,
    icon: "https://api.builder.io/api/v1/image/assets/TEMP/c0149569f94ffbfe645c4edfde9a0e71dfb2f6ad?width=128"
  }));

  return (
    <div className={styles.appsCatalogContainer}>
      <div className={styles.mainContent}>
        <h1 className={styles.welcomeTitle}>Welcome back, Daniel</h1>

        <Card
          icon=""
          ellipsis={false}
          className={styles.catalogCard}
        >
          <div className={styles.cardBody}>
            <div className={styles.header}>
              <h2 className={styles.catalogTitle}>PepsiCo Apps Catalogue</h2>
              <Search
                placeholderText="Type a search keyword..."
                size="medium"
                className={styles.searchInput}
              />
            </div>

            <div className={styles.filters}>
              <Filter label="Label" />
              <Filter label="Label" />
              <Filter label="Label" />
            </div>

            <TabsNavigation className={styles.tabsNavigation}>
              <Tab label="Your Apps (12)" type="dropdown" />
              <Tab label="Apps Catalogue" type="dropdown" isActive />
            </TabsNavigation>
            
            <div className={styles.appsGrid}>
              {appCards.map((app) => (
                <Card
                  key={app.id}
                  icon=""
                  ellipsis={false}
                  border
                  className={styles.appCard}
                >
                  <div className={styles.appCardContent}>
                    <img 
                      src={app.icon} 
                      alt="App icon" 
                      className={styles.appIcon}
                    />
                    <div className={styles.appInfo}>
                      <div className={styles.appTitleRow}>
                        <h3 className={styles.appTitle}>{app.title}</h3>
                        <svg 
                          className={styles.launchIcon}
                          width="16" 
                          height="16" 
                          viewBox="0 0 16 16" 
                          fill="none"
                        >
                          <path 
                            d="M3.33301 3.42627H7.5V3.77588H2.83301V14.2241H13.167V9.49951H13.5V13.7241C13.4998 14.1958 13.1182 14.5735 12.667 14.5737H3.33301C2.87674 14.5736 2.50016 14.1975 2.5 13.7241V4.27588C2.50004 3.80244 2.87667 3.42645 3.33301 3.42627ZM13.5 3.42627V7.1499H13.167V4.01025L12.3105 4.87646L6.11328 11.1499L5.87598 10.9097L12.082 4.62744L12.9238 3.77588H9.83301V3.42627H13.5Z" 
                            fill="#005CBC" 
                            stroke="#005CBC"
                          />
                        </svg>
                      </div>
                      <p className={styles.appDescription}>{app.description}</p>
                    </div>
                    <div className={styles.appTags}>
                      {app.tags.map((tagText, tagIndex) => (
                        <Tag
                          key={tagIndex}
                          text={tagText}
                          type="outlined"
                          size="medium"
                          isCopyable={false}
                          className={styles.appTag}
                        />
                      ))}
                    </div>
                    <div className={styles.appActions}>
                      <Button
                        variant="secondary"
                        size="medium"
                        state="enabled"
                        text="Edit Access"
                        className={styles.actionButton}
                      />
                      <Button
                        variant="primary"
                        size="medium"
                        state="enabled"
                        text="New Access"
                        className={styles.actionButton}
                      />
                    </div>
                  </div>
                </Card>
              ))}
              {emptyCards.map((card) => (
                <Card
                  key={card.id}
                  icon=""
                  ellipsis={false}
                  border
                  className={styles.emptyCard}
                >
                  <img 
                    src={card.icon} 
                    alt="Empty placeholder" 
                    className={styles.emptyIcon}
                  />
                </Card>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AppsCatalog;
