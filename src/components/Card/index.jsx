import React from "react";
import {
  Container,
  Footer,
  Icons,
  Img,
  Info,
  InfoWrapper,
  User,
} from "./style";
import noimg from "../../assets/images/noimage.png";

const Card = ({ info, mr }) => {
  return (
    <Container mr={mr}>
      <Img src={info?.attachments[0].imgPath || noimg} />
      <InfoWrapper>
        <User>
          <User.Img src={info?.user.img || noimg} />
        </User>
        <div className="subtitle">
          {info?.name || "New Apartment Nice View"}
        </div>
        <div className="description">
          {info?.description || "Quincy St, Brooklyn, NY, USA"}
        </div>
        <Info>
          <Info.Details>
            <Icons.Bed />
            <div className="description">
              {info?.houseDetails.beds || 0}beds
            </div>
          </Info.Details>
          <Info.Details>
            <Icons.Bath />
            <div className="description">
              {info?.houseDetails.bath || 0} baths
            </div>
          </Info.Details>
          <Info.Details>
            <Icons.Garage />
            <div className="description">
              {info?.houseDetails.garage || 0}garage
            </div>
          </Info.Details>{" "}
          <Info.Details>
            <Icons.Ruler />
            <div className="description">
              {" "}
              {info?.houseDetails.area || 0}Sq Ft
            </div>
          </Info.Details>
        </Info>
      </InfoWrapper>
      <Footer>
        <Info.Details>
          <div className="deleted description">{info?.salePrice}$2,800/mo</div>
          <div className="subtitle">{info?.price}$7,500/mo</div>
        </Info.Details>
        <div className="endToRich">
          <Icons.Resize />
          <Icons.Heart />
        </div>
      </Footer>
    </Container>
  );
};

export default Card;
