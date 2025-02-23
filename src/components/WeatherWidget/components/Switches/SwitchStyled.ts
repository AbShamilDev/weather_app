import styled from "styled-components";

export const SwitchWrapper = styled.div`
  margin-bottom: 2;
  display: flex;
  border-radius: 10px;
  border: 1px solid rgb(71, 71, 71);
  overflow: hidden;
  width: fit-content;
`;

export const SwitchButton = styled.button<{ isActive: boolean; isLast?: boolean }>`
  padding: 10px 15px;
  border: none;
  border-right: ${(props) => (props.isLast ? "" : "1px solid rgb(46, 46, 46)")};
  background: ${(props) => (props.isActive ? "#535353" : "#353535")};
`;
