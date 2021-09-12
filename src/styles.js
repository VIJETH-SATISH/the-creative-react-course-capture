import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;

  h2 {
    font-weight: lighter;
  }
`;

export const Image = styled.div`
  flex: 1;
  //this makes both the flex items to occu[y yhe same width space
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover; //maintaining aspect rationof the photograph
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
