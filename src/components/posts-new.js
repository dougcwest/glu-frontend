import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createMember } from "../actions";

import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as _ from "lodash";


const PostsNew = (props) => {

  const [errors, setErrors] = useState({});

  const validFields = (input) => {
    const errorMessages = _.reduce(input, function (acc, field, key) {
      if (!field) {
        acc[key] = { message: `The ${key} field is required`}
      }

      return acc;
    }, {});

    setErrors(errorMessages);

    return _.isEmpty(errorMessages);
  };

  const [firstName, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [feedback, setFeedback] = useState(0);
  const [id, setId] = useState('');
  const [department, setDepartment] = useState('');
  const [position, setPosition] = useState('');
  const [supervisor, setSupervisor] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  const [interests, setInterests] = useState({
    int1: '',
    int2: '',
    int3: '',

  });
  const [favoriteFoods, setFavoriteFoods] = useState({
    food1: '',
    food2: '',
    food3: '',
  });
  const [movieGenre, setMovieGenre] = useState({
    genre: ''
  });
  const [favoriteCauses, setFavoriteCauses] = useState({
    cause1: '',
    cause2: '',
    cause3: '',
  });
  const [personalMilestones, setPersonalMilestones] = useState('');

  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validFields({
      firstName,
      lastName,
      id,
      department,
      position,
      supervisor,
      email,
      photo
    })) {
      dispatch(createMember(
        {
          id,
          firstName,
          lastName,
          department,
          position,
          supervisor,
          email,
          photo,
          feedback,
          interests,
          favoriteFoods,
          movieGenre,
          favoriteCauses,
          personalMilestones: personalMilestones.split(' '),
          category,
        }, () => {
          props.history.push('/members');
        })
      );
    }
  };

  return (
    <FormGroup>
      <Container>
        <FormRow>
          <FormColumn>
            <Link to="/" style={linkStyle}><BiIcons.BiArrowBack /> Back</Link>
            <FormHeader>Create a Team Member <BsIcons.BsFillPersonPlusFill style={{marginTop: '-10px'}}/></FormHeader>
        <FormWrapper>
          <FormInputRow>
            <FormLabel>First Name*</FormLabel>
            <FormInput 
              value={firstName}
              onChange={(e) => setName(e.target.value)} />
              <p>{errors.firstName?.message}</p>
          </FormInputRow>
          <FormInputRow>
            <FormLabel>Last Name*</FormLabel>
            <FormInput 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} />
              <p>{errors.lastName?.message}</p>
          </FormInputRow>
          <FormInputRow>
            <FormLabel>ID*</FormLabel>
            <FormInput 
              value={id}
              onChange={(e) => setId(e.target.value)} />
              <p>{errors.id?.message}</p>
          </FormInputRow>
          <FormInputRow>
            <FormLabel>Department*</FormLabel>
            <FormInput 
              value={department}
              onChange={(e) => setDepartment(e.target.value)}/>
              <p>{errors.department?.message}</p>
          </FormInputRow>
          <FormInputRow>
            <FormLabel>Position*</FormLabel>
            <FormInput
              value={position}
              onChange={(e) => setPosition(e.target.value)} />
              <p>{errors.position?.message}</p>
          </FormInputRow>
          <FormInputRow>
            <FormLabel>Supervisor*</FormLabel>
            <FormInput 
              value={supervisor}
              onChange={(e) => setSupervisor(e.target.value)}/>
              <p>{errors.supervisor?.message}</p>
          </FormInputRow>
          <FormInputRow>
            <FormLabel>Email*</FormLabel>
            <FormInput 
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
              <p>{errors.email?.message}</p>
          </FormInputRow>
          <FormInputRow>
            <FormLabel>Photo URL*</FormLabel>
            <FormInput 
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}/>
              <p>{errors.photo?.message}</p>
          </FormInputRow>
          <FormInputRow>
            <FormLabel>Feedback (%)</FormLabel>
            <FormInput 
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}/>
          </FormInputRow>
          <FormInputRow>
            <FormLabel><strong>Interests:</strong></FormLabel>
            <FormLabel>Int 1:</FormLabel>
            <FormInput 
              value={interests.int1}
              onChange={(e) => setInterests({...interests, int1: e.target.value})}/>
              <FormLabel>Int 2:</FormLabel>
            <FormInput 
              value={interests.int2}
              onChange={(e) => setInterests({...interests, int2: e.target.value})}/>
              <FormLabel>Int 3:</FormLabel>
            <FormInput 
              value={interests.int3}
              onChange={(e) => setInterests({...interests, int3: e.target.value})}/>
          </FormInputRow>
          <FormInputRow>
            <FormLabel><strong>Favorite Foods:</strong></FormLabel>
            <FormLabel>Food 1:</FormLabel>
            <FormInput 
              value={favoriteFoods.food1}
              onChange={(e) => setFavoriteFoods({...favoriteFoods, food1: e.target.value})}/>
              <FormLabel>Food 2:</FormLabel>
            <FormInput 
              value={favoriteFoods.food2}
              onChange={(e) => setFavoriteFoods({...favoriteFoods, food2: e.target.value})}/>
              <FormLabel>Food 3:</FormLabel>
            <FormInput 
              value={favoriteFoods.food3}
              onChange={(e) => setFavoriteFoods({...favoriteFoods, food3: e.target.value})}/>
          </FormInputRow>
          <FormInputRow>
            <FormLabel>Favorite Movie Genre</FormLabel>
            <FormInput 
              value={movieGenre.genre}
              onChange={(e) => setMovieGenre({...movieGenre, genre: e.target.value})}/>
          </FormInputRow>
          <FormInputRow>
            <FormLabel><strong>Favorite Causes:</strong></FormLabel>
            <FormLabel>Cause 1:</FormLabel>
            <FormInput 
              value={favoriteCauses.cause1}
              onChange={(e) => setFavoriteCauses({...favoriteCauses, cause1: e.target.value})}/>
              <FormLabel>Cause 2:</FormLabel>
            <FormInput 
              value={favoriteCauses.cause2}
              onChange={(e) => setFavoriteCauses({...favoriteCauses, cause2: e.target.value})}/>
              <FormLabel>Cause 3:</FormLabel>
            <FormInput 
              value={favoriteCauses.cause3}
              onChange={(e) => setFavoriteCauses({...favoriteCauses, cause3: e.target.value})}/>
          </FormInputRow>
          <FormInputRow>
            <FormLabel>Personal Milestones</FormLabel>
            <FormInput 
              value={personalMilestones}
              onChange={(e) => setPersonalMilestones(e.target.value)}/>
          </FormInputRow>
          <FormInputRow>
            <FormLabel>Category</FormLabel>
            <FormInput 
              value={category}
              onChange={(e) => setCategory(e.target.value)}/>
          </FormInputRow>
        </FormWrapper>
        <FormButton type="submit" onClick={handleSubmit}>Submit</FormButton> 
          </FormColumn>
        </FormRow>
      </Container>    
    </FormGroup>
  )
}

export default PostsNew;

const linkStyle = {
  marginLeft: "-32rem",
  marginBottom: "2rem",
  marginTop: "-1.5rem",
  textDecoration: "none",
  color: '#333333'
};

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: ${({ margin }) => (margin ? margin : '0 auto')};
  padding: ${({ padding }) => (padding ? padding : '0 15px')};
`;

const FormGroup = styled.div`
  padding: 160px 0;
  background: white;
`;

const FormHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #9ff697;
`;

const FormColumn = styled.div`
  padding: 50px;
  background: white;
  border-radius: 20px;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 80%
  }
`;

const FormWrapper = styled.form`
  padding-top: 0;
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;

const FormInputRow = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: stretch;
  margin-bottom: 1.4rem;

  p {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: #f00e0e;
  }  
`;

const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #cfcfcf;
  font-size: 1rem;
`;

const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: #afafaf;
`;

const FormButton = styled.button`
  border-radius: 4px;
  background: none;
  margin-top: 1.5rem;
  white-space: nowrap;
  outline: none;
  width: 100%;
  font-size: 1.4rem;
  padding: 5px 15px;
  border 2px solid #333333;
  cursor: pointer;
  overflow: hidden;
  color: #333333;

  &:hover {
    transition: background-color 0.4s ease-in;
    background-color: #9ff697;
  }
`;


