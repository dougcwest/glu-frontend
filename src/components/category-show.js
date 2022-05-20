import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useEffect } from "react";
import { fetchMembers } from "../actions";
import { categoryItems } from "../data/CategoryData";

const CategoryShow = (props) => {

  useEffect(() => {
    dispatch(fetchMembers());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchMembers]);

  const dispatch = useDispatch();

  const categoryMembers = useSelector(({ members }) => {
    return members.filter((member) => {

      return member.category === props.match.params.category;
    });
  });

  const category = categoryItems.find((cat) => {

    return cat.path === props.location.pathname;
  });

  const renderMembers = () => {
    if (categoryMembers.length > 0) {
      return categoryMembers.map((m) => {
        return (
          <Link style={linkStyle} to={`/members/${m.id}`}>
            <UserCard key={m.id}>           
              <img src={m.photo} alt="user" />
                <Name>
                  {m.firstName}{' '}{m.lastName}
                  <SurveyResponse value={m.feedback} title="Survey Response">{m.feedback}%</SurveyResponse>
                </Name>
                <Department>
                  {m.department}
                </Department>      
            </UserCard>
          </Link>
        );
      })
    } else {
      return <div>No members to show</div>
    }
  }

  return (
    <div>
      <SubHeader>
        <Create>
          {category.icon} <h2>{category.text}</h2>
        </Create>
      </SubHeader>
      <Container>
        {renderMembers()}
      </Container>
    </div>
  )
}

export default CategoryShow;

const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  width: min(85%, 70rem);
  padding-block: 2rem;
  margin-inline: auto;
  `;

  const SubHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ececec;
    height: 64px;
  `;

  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: '#333333'
  };

  const Create = styled.button`
    color: #333;
    border: none;
    border-radius: 6px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      margin-top: 6px;
    }
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