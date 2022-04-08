import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from './ReviewModal';

const ReviewFormUl = styled.ul`
  list-style-type: none;
  padding-left: 2px
`;

const Sign = styled.p`
  text-align: right;
  color: red;
  margin: 0;
  padding-right: 10px;
  font-style: italic;
  font-size: 3px
`;

const Characteristics = styled.table`
  table-layout: fixed;
  width: 100%
`;

const CharTd = styled.td`
  width: 30%;
  font-size: 10px
`;

const ReviewForm = ({
  productID, writable, setisWritable, char, setDataUpdate, setSort,
}) => {
  const product_id = productID;
  const [summary, setSummary] = useState('');
  const [recommend, setRecommend] = useState('');
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [characteristics, setCharacteristics] = useState({});
  const [selectPhoto, setSelectPhoto] = useState('');

  const [sign, setSign] = useState({
    top: '',
    star: 'Unselected',
    body: 'Minimum required character left: [50]',
    email: '',
    summary: 'Can not be empty',
    recommend: 'Unselected',
    size: 'Unselected',
    width: 'Unselected',
    comfort: 'Unselected',
    quality: 'Unselected',
    length: 'Unselected',
    fit: 'Unselected',
  });

  const handleSubmit = () => {
    const data = {
      product_id: Number(productID),
      rating: Number(rating),
      summary,
      body,
      recommend: Boolean(recommend),
      name,
      email,
      photos,
      characteristics,
    };
    if ((data.body.length >= 50) && (data.email.includes('@')) && data.summary.length > 0) {
      axios.post('/reviews', data)
        .then((res) => {
          setDataUpdate(res);
          setSort('newest');
          setSign((prev) => {
            prev.top = 'Your Reviews is posted!';
            return prev;
          });
          setisWritable(false);
        })
        .catch();
    }
  };
  const content = (
    <div>
      <h2>About the [PRODUCT NAME]</h2>
      <Sign>{sign.top}</Sign>
      <ReviewFormUl>
        <li>
          Overall Rating
          {' '}
          <Sign>{sign.star}</Sign>
          <div className="stars">
            <form
              action=""
              onChange={(e) => {
                setRating(e.target.value); setSign((prev) => {
                  if (e.target.value === '5') {
                    prev.star = <a style={{ color: 'green', margin: '0' }}>Great</a>;
                  } else if (e.target.value === '4') {
                    prev.star = <a style={{ color: 'green', margin: '0' }}>Good</a>;
                  } else if (e.target.value === '3') {
                    prev.star = <a style={{ color: 'green', margin: '0' }}>Average</a>;
                  } else if (e.target.value === '2') {
                    prev.star = <a style={{ color: 'green', margin: '0' }}>Fair</a>;
                  } else {
                    prev.star = <a style={{ color: 'green', margin: '0' }}>Poor</a>;
                  }
                  return prev;
                });
              }}
            >
              <input className="star star-5" id="star-5" type="radio" name="star" value="5" />
              <label className="star star-5" htmlFor="star-5">
                <input className="hidden" />
              </label>
              <input className="star star-4" id="star-4" type="radio" name="star" value="4" />
              <label className="star star-4" htmlFor="star-4">
                <input className="hidden" />
              </label>
              <input className="star star-3" id="star-3" type="radio" name="star" value="3" />
              <label className="star star-3" htmlFor="star-3">
                <input className="hidden" />
              </label>
              <input className="star star-2" id="star-2" type="radio" name="star" value="2" />
              <label className="star star-2" htmlFor="star-2">
                <input className="hidden" />
              </label>
              <input className="star star-1" id="star-1" type="radio" name="star" value="1" />
              <label className="star star-1" htmlFor="star-1">
                <input className="hidden" />
              </label>
            </form>
          </div>
        </li>
        <li>
          Do you recommend this product?
          <Sign className={(recommend.length !== 0) ? 'hidden' : ''}>{sign.recommend}</Sign>
          <form onChange={(e) => { setRecommend(e.target.value); }}>
            <input type="radio" name="recommendation" value="true" />
            Yes
            <input type="radio" name="recommendation" value="false" />
            No
          </form>
        </li>
        Characteristics
        <Characteristics style={{ textAlign: 'center' }}>
          <thead>
            <tr>
              <CharTd>&nbsp;</CharTd>
              <CharTd>1</CharTd>
              <CharTd>2</CharTd>
              <CharTd>3</CharTd>
              <CharTd>4</CharTd>
              <CharTd>5</CharTd>
            </tr>
          </thead>
          <tbody
            className={(!char.Size) ? 'hidden' : ''}
            onChange={(e) => {
              setCharacteristics((prev) => {
                const sizeID = (char.Size.id).toString();
                prev[sizeID] = Number(e.target.value);
                return prev;
              });
            }}
          >
            <tr>
              <CharTd><b>Size</b></CharTd>
              <CharTd>
                <input type="radio" name="size" value="5" />
                <br />
                A size too small
              </CharTd>
              <CharTd>
                <input type="radio" name="size" value="4" />
                <br />
                ½ a size too small
              </CharTd>
              <CharTd>
                <input type="radio" name="size" value="3" />
                <br />
                Prefect
              </CharTd>
              <CharTd>
                <input type="radio" name="size" value="2" />
                <br />
                ½ a size too big
              </CharTd>
              <CharTd>
                <input type="radio" name="size" value="1" />
                <br />
                A size too wide
              </CharTd>
            </tr>
          </tbody>
          <tbody
            className={(!char.Width) ? 'hidden' : ''}
            onChange={(e) => {
              setCharacteristics((prev) => {
                const widthID = (char.Width.id).toString();
                prev[widthID] = Number(e.target.value);
                return prev;
              });
            }}
          >
            <tr>
              <CharTd><b>Width</b></CharTd>
              <CharTd>
                <input type="radio" name="width" value="1" />
                <br />
                Too narrow
              </CharTd>
              <CharTd>
                <input type="radio" name="width" value="2" />
                <br />
                Slightly narrow
              </CharTd>
              <CharTd>
                <input type="radio" name="width" value="3" />
                <br />
                Perfect
              </CharTd>
              <CharTd>
                <input type="radio" name="width" value="4" />
                <br />
                Slightly wide
              </CharTd>
              <CharTd>
                <input type="radio" name="width" value="5" />
                <br />
                Too wide
              </CharTd>
            </tr>
          </tbody>
          <tbody
            className={(!char.Comfort) ? 'hidden' : ''}
            onChange={(e) => {
              setCharacteristics((prev) => {
                const qualityID = (char.Comfort.id).toString();
                prev[qualityID] = Number(e.target.value);
                return prev;
              });
              setSign((prev) => {
                prev.comfort = '';
                return prev;
              });
            }}
          >
            <tr>
              <CharTd>
                <b>Comfort</b>
                <br />
                {/* <Sign>{sign.comfort}</Sign> */}
              </CharTd>
              <CharTd>
                <input type="radio" name="comfort" value="1" />
                <br />
                Uncomfortable
              </CharTd>
              <CharTd>
                <input type="radio" name="comfort" value="2" />
                <br />
                Slightly uncomfortable
              </CharTd>
              <CharTd>
                <input type="radio" name="comfort" value="3" />
                <br />
                Ok
              </CharTd>
              <CharTd>
                <input type="radio" name="comfort" value="4" />
                <br />
                Comfortable
              </CharTd>
              <CharTd>
                <input type="radio" name="comfort" value="5" />
                <br />
                Perfect
              </CharTd>
            </tr>
          </tbody>
          <tbody
            className={(!char.Quality) ? 'hidden' : ''}
            onChange={(e) => {
              setCharacteristics((prev) => {
                const qualityID = (char.Quality.id).toString();
                prev[qualityID] = Number(e.target.value);
                return prev;
              });
            }}
          >
            <tr>
              <CharTd><b>Quality</b></CharTd>
              <CharTd>
                <input type="radio" name="quality" value="1" />
                <br />
                Poor
              </CharTd>
              <CharTd>
                <input type="radio" name="quality" value="2" />
                <br />
                Below average
              </CharTd>
              <CharTd>
                <input type="radio" name="quality" value="3" />
                <br />
                What I expected
              </CharTd>
              <CharTd>
                <input type="radio" name="quality" value="4" />
                <br />
                Pretty great
              </CharTd>
              <CharTd>
                <input type="radio" name="quality" value="5" />
                <br />
                Perfect
              </CharTd>
            </tr>
          </tbody>
          <tbody
            className={(!char.Length) ? 'hidden' : ''}
            onChange={(e) => {
              setCharacteristics((prev) => {
                const lengthID = (char.Length.id).toString();
                prev[lengthID] = Number(e.target.value);
                return prev;
              });
            }}
          >
            <tr>
              <CharTd>
                <b>Length</b>
              </CharTd>
              <CharTd>
                <input type="radio" name="length" value="1" />
                <br />
                Runs Short
              </CharTd>
              <CharTd>
                <input type="radio" name="length" value="2" />
                <br />
                Runs slightly short
              </CharTd>
              <CharTd>
                <input type="radio" name="length" value="3" />
                <br />
                Perfect
              </CharTd>
              <CharTd>
                <input type="radio" name="length" value="4" />
                <br />
                Runs slightly long
              </CharTd>
              <CharTd>
                <input type="radio" name="length" value="5" />
                <br />
                Runs long
              </CharTd>
            </tr>
          </tbody>
          <tbody
            className={(!char.Fit) ? 'hidden' : ''}
            onChange={(e) => {
              setCharacteristics((prev) => {
                const fitID = (char.Fit.id).toString();
                prev[fitID] = Number(e.target.value);
                return prev;
              });
            }}
          >
            <tr>
              <CharTd><b>Fit</b></CharTd>
              <CharTd>
                <input type="radio" name="fit" value="1" />
                <br />
                Runs tight
              </CharTd>
              <CharTd>
                <input type="radio" name="fit" value="2" />
                <br />
                Runs slightly tight
              </CharTd>
              <CharTd>
                <input type="radio" name="fit" value="3" />
                <br />
                Perfect
              </CharTd>
              <CharTd>
                <input type="radio" name="fit" value="4" />
                <br />
                Runs slightly long
              </CharTd>
              <CharTd>
                <input type="radio" name="fit" value="5" />
                <br />
                Runs long
              </CharTd>
            </tr>
          </tbody>
        </Characteristics>

        <li>Review summary</li>
        <Sign className={(summary.length !== 0) ? 'hidden' : ''}>{sign.summary}</Sign>
        <li>
          <input type="text" maxLength="60" placeholder="Example: Best purchase ever!" style={{ width: '90%' }} onChange={(e) => setSummary(e.target.value)} />
        </li>
        <li>Review body</li>
        <Sign>{sign.body}</Sign>
        <li>
          <input
            type="text"
            maxLength="1000"
            placeholder="Why did you like the product or not?"
            style={{ width: '90%', height: '100px' }}
            onChange={(e) => {
              setBody(e.target.value);
              setSign((prev) => {
                if (e.target.value.length < 50) {
                  const remainTextNum = 50 - e.target.value.length;
                  prev.body = `Minimum required character left: [${remainTextNum}]`;
                } else {
                  prev.body = <a style={{ color: 'green', margin: '0' }}>Minimum reached</a>;
                }
                return prev;
              });
            }}
          />
        </li>
        <li>Upload your photos</li>

        <li>
          <div className={photos.length === 5 ? 'hidden' : ''}>
            <input
              className="hidden"
              type="file"
              id="image_input"
              accept="image/png, image/jpg"
              multiple
              onChange={(e) => {
                const array = [];
                for (let i = 0; i < 5; i++) {
                  if (e.target.files[i]) {
                    array.push(URL.createObjectURL(e.target.files[i]));
                  }
                }
                setPhotos(array);
                setSelectPhoto(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <button><label htmlFor="image_input">Choose Photos</label></button>

          </div>
          <div id="display_image" style={{ width: 'auto', height: 'auto' }}>
            {photos.map((photo) => (
              <img style={{ width: '200px' }} src={photo} />
            ))}

          </div>
          <button>Upload</button>

        </li>
        <li>What is your nickname</li>
        <Sign className={(name.length !== 0) ? 'hidden' : ''}>{sign.summary}</Sign>
        <input type="text" maxLength="60" placeholder="Example: jackson11!" style={{ width: '90%' }} onChange={(e) => setName(e.target.value)} />
        <li>
          <p style={{
            margin: '0', fontSize: '5px', position: 'absolute', right: '10%', textAlign: 'center',
          }}
          >
            For privacy reasons, do not use your full name or email address
          </p>
        </li>
        <li>Your email</li>
        <Sign><i>{sign.email}</i></Sign>
        <li>
          <input
            type="email"
            placeholder="Example: jackson11@email.com"
            style={{ width: '90%' }}
            onChange={(e) => {
              setEmail(e.target.value);
              setSign((prev) => {
                if ((!e.target.value.includes('@')) || (!e.target.value.includes('.'))) {
                  prev.email = 'Not a valid email';
                } else {
                  prev.email = '';
                }
                return prev;
              });
            }}
          />

        </li>
        <li>

          <p style={{
            margin: '0', fontSize: '5px', position: 'absolute', right: '10%', textAlign: 'center',
          }}
          >
            For authentication reasons, you will not be emailed
          </p>
        </li>

        <li>
          <button type="submit" onClick={() => { handleSubmit(); }}>
            Submit review
          </button>
        </li>
      </ReviewFormUl>
    </div>
  );
  return (
    <div>
      <Modal title="Write Your Review" content={content} onClose={setisWritable} close={writable} />
    </div>
  );
};

export default ReviewForm;
