import React, { useState, useEffect} from 'react';
import styled, { css } from 'styled-components';
import { StarIcon } from '@heroicons/react/solid'

const Characteristics = styled.ul`
list-style-type: none
`

const ReviewForm = ({ setisWritable }) => {

  return (
  <div>Write a Review
    <Characteristics>
      <li>
        Overall Rating
        <StarIcon className='star'/>
      </li>
      <li>
        Do you recommend this product?
        <input type='radio' name='recommendation' value='true'></input>Yes
        <input type='radio' name='recommendation' value='false'></input>No
      </li>
  <li>
    Characteristics
  <Characteristics>
    <li>
      <label>Size</label>
      <input type='radio' name='size' value='5'></input>
      <input type='radio' name='size' value='4'></input>
      <input type='radio' name='size' value='3'></input>
      <input type='radio' name='size' value='2'></input>
      <input type='radio' name='size' value='1'></input>
    </li>
    <li>
      <label>Width</label>
      <input type='radio' name='width' value='5'></input>
      <input type='radio' name='width' value='4'></input>
      <input type='radio' name='width' value='3'></input>
      <input type='radio' name='width' value='2'></input>
      <input type='radio' name='width' value='1'></input>
    </li>
    <li>
      Comfort
      <input type='radio' name='comfort' value='5'></input>
      <input type='radio' name='comfort' value='4'></input>
      <input type='radio' name='comfort' value='3'></input>
      <input type='radio' name='comfort' value='2'></input>
      <input type='radio' name='comfort' value='1'></input>
    </li>
    <li>
      Quality
      <input type='radio' name='quality' value='5'></input>
      <input type='radio' name='quality' value='4'></input>
      <input type='radio' name='quality' value='3'></input>
      <input type='radio' name='quality' value='2'></input>
      <input type='radio' name='quality' value='1'></input>
    </li>
    <li>
      Length
      <input type='radio' name='length' value='5'></input>
      <input type='radio' name='length' value='4'></input>
      <input type='radio' name='length' value='3'></input>
      <input type='radio' name='length' value='2'></input>
      <input type='radio' name='length' value='1'></input>
    </li>
    <li>
      Fit
      <input type='radio' name='fit' value='5'></input>
      <input type='radio' name='fit' value='4'></input>
      <input type='radio' name='fit' value='3'></input>
      <input type='radio' name='fit' value='2'></input>
      <input type='radio' name='fit' value='1'></input>
    </li>
  </Characteristics>
  </li>
  <li>Review summary</li>
  <li>
    <input type='text' maxLength='60' placeholder='Example: Best purchase ever!'></input>
  </li>
  <li>Review body</li>
  <li><input type='text' maxLength='1000' placeholder='Why did you like the product or not?'></input>
  </li>
  <li>Upload your photos</li>
  <li><button>Update</button></li>
  <li>What is your nickname</li>
  <input type='text' maxLength='60' placeholder='Example: jackson11!' ></input>
  <li>For privacy reasons, do not use your full name or email address</li>
  <li>Your email</li>
  <li><input type='email' placeholder='Example: jackson11@email.com'></input></li>
  <li>For authentication reasons, you will not be emailed</li>
  <li><button onClick={() => setisWritable(false)}>Submit review</button></li>
  </Characteristics>
  </div>
  )
}

export default ReviewForm;