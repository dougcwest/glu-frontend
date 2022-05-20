import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteMember, fetchMember, updateCategory } from '../actions';
import ChartsShow from './charts-show';
import { useState, useEffect } from "react";

const MembersShow = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = props.match.params;
    dispatch(fetchMember(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const member = useSelector(({ members }) => {
    return members.find((member) => {

      return member.id === props.match.params.id;
    });
  });


  const [selectedCategory, setSelectedCategory] = useState(member.category);
  const [confirm, setConfirm] = useState(false);

  const onClick = () => {
    if (!confirm) {
      setConfirm(true)
    } else {
      setConfirm(false)
    }
  };

  const onDeleteClick = () => {
    dispatch(deleteMember(props.match.params.id, () => {
      props.history.push('/members');
    }));
  };

  const ConfirmPopUp = () => (
    <ConfirmColumn>
      <h4>Do you really want to <strong>delete</strong> {member.firstName}?</h4>
      <br />
      <span><Create onClick={onDeleteClick}>Yes</Create>
      <Delete onClick={onClick}>
      <Link style={linkStyle} to={`/members/${member.id}`}>
            No
          </Link>
      </Delete></span>
    </ConfirmColumn>
  )


  const handleCategoryChange = (e) => {
    e.preventDefault();
    
    setSelectedCategory(e.target.value);

    dispatch(updateCategory(props.match.params.id, e.target.value));    
  };

  const renderMilestones = () => {
    return member.personalMilestones.map((milestone, i) => {
      if (member.personalMilestones.length -1 === i) {
        return <span key={i}>{milestone}</span>
      } else {
        return <span key={i}>{milestone}, </span>
      }
    });
  };

  return (
    <div>
     <SubHeader>
        <Create title="back">
          <Link style={linkStyle} to="/members">
            Back
          </Link>
        </Create>
        <Delete size="2x" title="Delete" onClick={onClick}
        >
          Delete
        </Delete>
      </SubHeader>
      <MainContainer>
        <FormGroup>
          <FormRow>
            { confirm ? <ConfirmPopUp /> : null }
            <FormColumn>
            <h6>Category: <strong>{selectedCategory}</strong></h6>
            <SelectRow>
            <select value={selectedCategory} onChange={handleCategoryChange}>
              <option value="DEFAULT" disabled hidden>Change Category</option>
              <option value="leaders">Leaders</option>
              <option value="optimists">Optimists</option>
              <option value="encouragers">Encouragers</option>
              <option value="attention">Needs Attention</option>
              <option value="burnout">Burnout Risk</option>
            </select>
          </SelectRow>
          <br />
              <UserImg>
                <img src={member.photo} alt="team member"/> 
              </UserImg> 
              <FormHeader><h1>{member.firstName} {member.lastName}</h1></FormHeader>
              <FormWrapper>  
                <p><strong>Department:</strong> {member.department}</p>
                <p><strong>Position:</strong> {member.position}</p>
                <p><strong>Supervisor:</strong> {member.supervisor}</p>
                <p><strong>Email:</strong> {member.email}</p>
                <p><strong>Interests: </strong>{member.interests.int1}, {member.interests.int2}, {member.interests.int3},</p>
                <p><strong>Favorite Foods: </strong>{member.favoriteFoods.food1}, {member.favoriteFoods.food2}, {member.favoriteFoods.food3}</p>
                <p><strong>Favorite Movie Genre:</strong> {member.movieGenre.genre}</p>
                <p><strong>Favorite Causes:</strong> {member.favoriteCauses.cause1}, {member.favoriteCauses.cause2}, {member.favoriteCauses.cause3}</p>
                <p><strong>Milestones:</strong> {renderMilestones()}</p>
              </FormWrapper>
            </FormColumn>
          </FormRow>
          <FormRow>
            <ChartColumn>
              <FormWrapper>
                <ChartsShow memberId={props.match.params.id}/>
              </FormWrapper>
              </ChartColumn>  
          </FormRow>
        </FormGroup>
      </MainContainer>
    </div>
  );
};

export default MembersShow;


  const SubHeader = styled.div`
    display: flex;
    align-items: center;
    background: #ececec;
    height: 64px;
  `;

  const SelectRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 475px;
  margin-top: -20px;
  margin-bottom: 20px;

  select {
    border-radius: 6px;
    padding-left: 4px;
    padding-right: 4px;
    outline: none;
    color: #333;

    &:hover {
      background: rgba(51, 51, 51, 0.7);
      color: white;
    }
`;

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: '#333333'
  };

  const Create = styled.button`
    background: #9ff697;
    border: none;
    border-radius: 6px;
    height: 38px;
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 2rem;
  `;

  const Delete = styled.button`
    background: #ff6961;
    border: none;
    border-radius: 6px;
    height: 38px;
    width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 1rem;
  `;

  const UserImg = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 20px;
  font-weight: 600;
  background: none;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 100%;
  min-width: 150px;
  height: 250px;
  z-index: 500;
  max-width: 250px;
  min
  justify-content: space-between;

  img {
    width: 100%;
    cursor: pointer;
  }
  `;
 
const MainContainer = styled.div`
  width: 100%;
  background: #fafafa;
`;

const FormGroup = styled.div`
  padding: 80px 0;
  background: #fafafa;
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
  margin-bottom: 40px;

  h6 {
    margin-left: 450px;
    margin-bottom: 30px;
    margin-top: -20px;
  }

  @media screen and (max-width: 768px) {
    width: 80%
  }
`;

const ConfirmColumn = styled.div`
  padding: 20px;
  background: rgba(51, 51, 51, 0.7);
  border-radius: 20px;
  width: 300px;
  display: flex;
  color: white;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  align-items: center;
  margin-top: -900px;
  margin-left: -950px;
  position: absolute;
  margin-bottom: 20px;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: -1.5rem;
  }
  }
`;

const ChartColumn = styled.div`
  padding: 50px;
  background: rgba(250, 250, 250, 0.5);
  border-radius: 20px;
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  align-items: center;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    width: 80%
  }
`;

const FormWrapper = styled.form`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  p {
    font-size: 18px;
  }
`;

const FormRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -15px -15px;
  flex-wrap: wrap;
  align-items: center;
`;
