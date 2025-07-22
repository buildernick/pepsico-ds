import React from "react";
import {
  CustomSearch,
  CustomFilter,
  CustomTabsNavigation,
  CustomTab,
  CustomCard,
  CustomTag,
  CustomButton,
} from "../components";
import styles from "./PepsiAdmin.module.css";

const PepsiAdmin: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.welcomeText}>Welcome back, Daniel</div>
        <div className={styles.card}>
          <div className={styles.cardBody}>
            <div className={styles.header}>
              <div className={styles.title}>PepsiCo Apps Catalogue</div>
              <CustomSearch
                placeholderText="Type a search keyword..."
                size="medium"
                className={styles.search}
              />
            </div>
            <div className={styles.filters}>
              <CustomFilter label="Label" />
              <CustomFilter label="Label" />
              <CustomFilter label="Label" />
            </div>
            <CustomTabsNavigation>
              <CustomTab label="Your Apps (12)" type="dropdown" />
              <CustomTab label="Apps Catalogue" type="dropdown" isActive />
            </CustomTabsNavigation>
            <div className={styles.cardsGrid}>
              {Array(6)
                .fill(null)
                .map((_, index) => (
                  <CustomCard
                    key={index}
                    icon=""
                    ellipsis={false}
                    border
                    className={styles.catalogCard}
                  >
                    <img src="https://cdn.builder.io/api/v1/image/assets/3c46ede868ac49a7b4bee1d3fa5c4848/a5136f27373171f652f846e8aa1346068703f333?placeholderIfAbsent=true" alt="" className={styles.cardIcon} />
                    <div className={styles.cardContent}>
                      <div className={styles.cardHeader}>
                        <div className={styles.cardTitle}>
                          Lorem ipsum dolor
                        </div>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/3c46ede868ac49a7b4bee1d3fa5c4848/9c646560080776fa7d66901ac8bcb57d8396a04f?placeholderIfAbsent=true"
                          alt=""
                          className={styles.cardHeaderIcon}
                        />
                      </div>
                      <div className={styles.cardDescription}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud.
                      </div>
                    </div>
                    <div className={styles.tags}>
                      <CustomTag
                        type="outlined"
                        size="medium"
                        text="Time"
                        isCopyable={false}
                      />
                      <CustomTag
                        type="outlined"
                        size="medium"
                        text="Management"
                        isCopyable={false}
                      />
                      <CustomTag
                        type="outlined"
                        size="medium"
                        text="Report"
                        isCopyable={false}
                      />
                      <CustomTag
                        type="outlined"
                        size="medium"
                        text="+3"
                        isCopyable={false}
                      />
                    </div>
                    <div className={styles.cardActions}>
                      <CustomButton
                        variant="secondary"
                        size="medium"
                        state="enabled"
                        text="Edit Access"
                      />
                      <CustomButton
                        variant="primary"
                        size="medium"
                        state="enabled"
                        text="New Acccess"
                      />
                    </div>
                  </CustomCard>
                ))}
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <CustomCard
                    key={`empty-${index}`}
                    icon=""
                    ellipsis={false}
                    border
                    className={styles.catalogCard}
                  >
                    <img src="https://cdn.builder.io/api/v1/image/assets/3c46ede868ac49a7b4bee1d3fa5c4848/581205dd9b5adaf62c123a0093de596325b11fa4?placeholderIfAbsent=true" alt="" className={styles.emptyCardIcon} />
                  </CustomCard>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PepsiAdmin;
