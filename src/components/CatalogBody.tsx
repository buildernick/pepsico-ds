import React from "react";
import {
  CustomSearch,
  CustomFilter,
  CustomTabsNavigation,
  CustomTab,
  CustomCard,
  CustomTag,
  CustomButton,
} from "./index";
import styles from "./CatalogBody.module.css";

const CatalogBody: React.FC = () => {
  return (
    <div className={styles.view1}>
      <div className={styles.view2}>
        <div className={styles.view3}>Welcome back, Daniel</div>
        <div className={styles.view4}>
          <div className={styles.view5}>
            <div className={styles.view6}>
              <div className={styles.view7}>PepsiCo Apps Catalogue</div>
              <CustomSearch
                placeholderText="Type a search keyword..."
                size="medium"
                className={styles.customSearch1}
              />
            </div>
            <div className={styles.view8}>
              <CustomFilter label="Label" />
              <CustomFilter label="Label" />
              <CustomFilter label="Label" />
            </div>
            <CustomTabsNavigation>
              <CustomTab label="Your Apps (12)" type="dropdown" />
              <CustomTab label="Apps Catalogue" type="dropdown" isActive />
            </CustomTabsNavigation>
            <div className={styles.view9}>
              {[...Array(6)].map((_, index) => (
                <CustomCard
                  key={index}
                  icon=""
                  ellipsis={false}
                  border
                  className={styles.customCard}
                >
                  <img src="https://cdn.builder.io/api/v1/image/assets/3c46ede868ac49a7b4bee1d3fa5c4848/a5136f27373171f652f846e8aa1346068703f333?placeholderIfAbsent=true" alt="" className={styles.cardImage} />
                  <div className={styles.cardBody}>
                    <div className={styles.cardHeader}>
                      <div className={styles.cardTitle}>Lorem ipsum dolor</div>
                      <img src="https://cdn.builder.io/api/v1/image/assets/3c46ede868ac49a7b4bee1d3fa5c4848/9c646560080776fa7d66901ac8bcb57d8396a04f?placeholderIfAbsent=true" alt="" className={styles.cardIcon} />
                    </div>
                    <div className={styles.cardDescription}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud.
                    </div>
                  </div>
                  <div className={styles.cardTags}>
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
                  <div className={styles.cardButtons}>
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
              {[...Array(3)].map((_, index) => (
                <CustomCard
                  key={`empty-${index}`}
                  icon=""
                  ellipsis={false}
                  border
                  className={styles.customCard}
                >
                  <img src="https://cdn.builder.io/api/v1/image/assets/3c46ede868ac49a7b4bee1d3fa5c4848/581205dd9b5adaf62c123a0093de596325b11fa4?placeholderIfAbsent=true" alt="" className={styles.emptyCardImage} />
                </CustomCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatalogBody;
