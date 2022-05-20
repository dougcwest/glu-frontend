import axios from "axios";

export const FETCH_CHARTS = "FETCH_CHARTS";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const FETCH_MEMBERS = "FETCH_MEMBERS";
export const FETCH_MEMBER = "FETCH_MEMBER";
export const CREATE_MEMBER = "CREATE_MEMBER";
export const DELETE_MEMBER = "DELETE_MEMBER"
export const SORT_MEMBERS = "SORT_MEMBERS"
export const FETCH_BY_QUERY = "FETCH_BY_QUERY";

const ROOT_URL = 'http://localhost:8000';

export function fetchMembers() {
  const request = axios.get(`${ROOT_URL}/members`).catch((error) => {
    if (error.response) {
      alert('No members exist.');
    }
  });

  return {
    type: FETCH_MEMBERS,
    payload: request,
  };
}

export function fetchbyQuery(searchQuery, department, feedback) {
  const request = axios
    .get(
      `${ROOT_URL}/members?firstName=${searchQuery}&department=${department}&feedback=${feedback}`
    )
    .catch((error) => {
      if (error.response) {
        alert('Invalid search. Enter a valid member name or department.');
      }
    });

  return {
    type: FETCH_BY_QUERY,
    payload: request,
  };
}

export function fetchMember(id) {
  const request = axios.get(`${ROOT_URL}/members/${id}`);

  return {
    type: FETCH_MEMBER,
    payload: request,
  };
}

export function updateCategory(id, category) {
  const request = axios.put(`${ROOT_URL}/members/${id}`,
    {
      category: category
    });

  return {
    type: UPDATE_CATEGORY,
    payload: request
  }
};

export function createMember(values, callback) {
  const request = axios.post(`${ROOT_URL}/members`, values);

  request.then(() => callback());

  return {
    type: CREATE_MEMBER,
    payload: request
  }
};

export function deleteMember(id, callback) {
  const request = axios.delete(`${ROOT_URL}/members/${id}`);

  request.then(() => callback());

  return {
    type: DELETE_MEMBER,
    payload: request
  }
};

export function sortMembers() {
  return {
    type: SORT_MEMBERS,
  };
}

export function fetchCharts() {
  return {
    type: FETCH_CHARTS,
  };
}
