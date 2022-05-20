import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMembers, sortMembers } from "../actions";
import { useEffect } from "react";
import styled from 'styled-components';
import SearchBar from "./search-bar";
import * as BsIcons from 'react-icons/bs';

const MembersIndex = () => {
  const members = useSelector((state) => state.members);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMembers());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchMembers]);

  const handleSort = (e) => {
    e.preventDefault();

    dispatch(sortMembers());
  };

  const renderMembers = () => {
    if (members.length > 0) {
      return members.map((member) => {
        return (
          <Link style={linkStyle} to={`/members/${member.id}`}>
            <UserCard key={member.id}>           
              <img src={member.photo} alt="user" />
                <Name>
                  {member.firstName}{' '}
                  {member.lastName}
                  <SurveyResponse value={member.feedback} title="Survey Response">{member.feedback}%</SurveyResponse>
                </Name>
                <Department>
                  {member.department}
                </Department>      
            </UserCard>
          </Link>
        );
      })
    } else {
      return <div>Loading...</div>
    }
  }

  return (
    <div>
      <SubHeader>
        <Create title="Create Team Member">
          <Link style={linkStyle} to="/create-member">
            <BsIcons.BsFillPersonPlusFill />
          </Link>
        </Create>
        <Sort onClick={handleSort}>Sort By Feedback</Sort>
        <SearchContainer>
          <SearchBar />
        </SearchContainer>
      </SubHeader>
      <Container>
        {renderMembers()}
      </Container>
    </div>
  )
}

export default MembersIndex;

const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  width: min(85%, 70rem);
  padding-block: 2rem;
  margin-inline: auto;
  `;

  const SearchContainer = styled.div`
  display: flex;  
  align-items: center;
  margin-top: 12px;
  justify-content: end;
  min-width: 600px;
  margin-left: 350px;
`;

  const SubHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    background: #ececec;
    height: 64px;
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
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 2rem;
    margin-right: 1rem;
  `;

  const Sort = styled.button`
  background: #9ff697;
  border: none;
  border-radius: 6px;
  width: 150px;
  height: 36px;
  font-weight: 600;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`;

  const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  margin: 10px;
  font-weight: 600;
  background: none;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 100%;
  min-width: 175px;
  max-width: 250px;
  min
  justify-content: space-between;

  img {
    width: 100%;
    margin-bottom: 12px;
    cursor: pointer;
  }
  `;

  const Name = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #333333;
    padding-bottom: 8px;
    padding-top: 2px;
    font-size: 18px;
  `;

  const Department = styled.div`
    padding-bottom: 12px;
    padding-top: 2px;
    color: gray;
  `;

  const SurveyResponse = styled.button`
    height: 20px;
    width: 34px;
    display: flex;
    margin-left: 8px;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    border: none;
    color: #333333;
    cursor: pointer;
    background: ${(props) => props.value >= 80 ? '#9ff697' : props.value <= 79 && props.value > 60 ? '#fdfd96' : props.value <= 60 ? '#ff6961' : '#9ff697'};
    border-radius: 15%;
  `;
