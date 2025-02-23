import styled from "styled-components";

export const SwitchWrapper = styled.div`
  margin-bottom: 2;
  display: flex;
  border-radius: 10px;
  border: 1px solid rgb(71, 71, 71);
  overflow: hidden;
  flex-wrap: wrap;
  /* width: fit-content; */
`;

export const SwitchButton = styled.button<{ isActive: boolean; isLast?: boolean }>`
  display: flex;
  flex: 1 0 0;
  justify-content: center;
  padding: 10px 15px;
  border: none;
  white-space: nowrap;
  border-right: ${(props) => (props.isLast ? "" : "1px solid rgb(46, 46, 46)")};
  background: ${(props) => (props.isActive ? "#535353" : "#353535")};
`;
