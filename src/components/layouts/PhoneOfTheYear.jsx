import React from "react";
import Container from "../Container";
import watchOfTheYear from "../../assets/watchOfTheyear.png";
import { Link } from "react-router-dom";

const PhoneOfTheYear = () => {
  return (
    <>
      <div className="py-[130px] bg-white">
        <Container>
          <div className="flex w-full h-[370px] bg-[#F3F3F3]">
            <div className="w-[633px] h-full">
              <img
                src={watchOfTheYear}
                alt="Watch"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-[49px] flex items-center">
              <div >
                <h4 className="text-left font-bold text-[39px] text-[#262626] ">Phone of the year</h4>
                <p className="pt-[38px] pb-[2px] w-[511px] text-[16px] font-regular text-[#262626]">Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
                <Link to="/shop">
                <button className="py-4 px-12 bg-black text-white text-bold text-sm mt-[50px]">Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PhoneOfTheYear;
