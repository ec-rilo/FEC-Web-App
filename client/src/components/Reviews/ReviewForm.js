import React, { useState } from 'react';
import styled from 'styled-components';
import { StarIcon } from '@heroicons/react/solid';

const Characteristics = styled.ul`
list-style-type: none
`;

const ReviewForm = ({ setisWritable }) => {
  const [body, setBody] = useState('');
  return (
    <div>
      Write a Review
      <Characteristics>
        <li>
          Overall Rating
          <div className="stars">
            <form action="">
              <label className="star star-5" htmlFor="star-5">
                <input className="hidden" />
              </label>
              <input className="star star-4" id="star-4" type="radio" name="star" />
              <label className="star star-4" htmlFor="star-4">
                <input className="hidden" />
              </label>
              <input className="star star-3" id="star-3" type="radio" name="star" />
              <label className="star star-3" htmlFor="star-3">
                <input className="hidden" />
              </label>
              <input className="star star-2" id="star-2" type="radio" name="star" />
              <label className="star star-2" htmlFor="star-2">
                <input className="hidden" />
              </label>
              <input className="star star-1" id="star-1" type="radio" name="star" />
              <label className="star star-1" htmlFor="star-1">
                <input className="hidden" />
              </label>
            </form>
          </div>
        </li>
        <li>
          Do you recommend this product?
          <input type="radio" name="recommendation" value="true" />
          Yes
          <input type="radio" name="recommendation" value="false" />
          No
        </li>
        <li>
          Characteristics
          <Characteristics>
            <li>
              Size
              <input type="radio" name="size" value="5" />
              <input type="radio" name="size" value="4" />
              <input type="radio" name="size" value="3" />
              <input type="radio" name="size" value="2" />
              <input type="radio" name="size" value="1" />
            </li>
            <li>
              Width
              <input type="radio" name="width" value="5" />
              <input type="radio" name="width" value="4" />
              <input type="radio" name="width" value="3" />
              <input type="radio" name="width" value="2" />
              <input type="radio" name="width" value="1" />
            </li>
            <li>
              Comfort
              <input type="radio" name="comfort" value="5" />
              <input type="radio" name="comfort" value="4" />
              <input type="radio" name="comfort" value="3" />
              <input type="radio" name="comfort" value="2" />
              <input type="radio" name="comfort" value="1" />
            </li>
            <li>
              Quality
              <input type="radio" name="quality" value="5" />
              <input type="radio" name="quality" value="4" />
              <input type="radio" name="quality" value="3" />
              <input type="radio" name="quality" value="2" />
              <input type="radio" name="quality" value="1" />
            </li>
            <li>
              Length
              <input type="radio" name="length" value="5" />
              <input type="radio" name="length" value="4" />
              <input type="radio" name="length" value="3" />
              <input type="radio" name="length" value="2" />
              <input type="radio" name="length" value="1" />
            </li>
            <li>
              Fit
              <input type="radio" name="fit" value="5" />
              <input type="radio" name="fit" value="4" />
              <input type="radio" name="fit" value="3" />
              <input type="radio" name="fit" value="2" />
              <input type="radio" name="fit" value="1" />
            </li>
          </Characteristics>
        </li>
        <li>Review summary</li>
        <li>
          <input type="text" maxLength="60" placeholder="Example: Best purchase ever!" />
        </li>
        <li>Review body</li>
        <li>
          <input type="text" maxLength="1000" placeholder="Why did you like the product or not?" onChange={(e) => { setBody(e.target.value); }} />
        </li>
        <li>Upload your photos</li>
        <li>
          <button type="submit">
            Update
          </button>
        </li>
        <li>What is your nickname</li>
        <input type="text" maxLength="60" placeholder="Example: jackson11!" />
        <li>For privacy reasons, do not use your full name or email address</li>
        <li>Your email</li>
        <li><input type="email" placeholder="Example: jackson11@email.com" /></li>
        <li>For authentication reasons, you will not be emailed</li>
        <li>
          <button type="submit" onClick={() => setisWritable(false)}>
            Submit review
          </button>
        </li>
      </Characteristics>
    </div>
  );
};

// setisWritable.propType = {

// }

export default ReviewForm;
