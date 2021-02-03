/* @flow */

import React from "react";
import styled from "styled-components";

const SelectContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  align-items: center;
  display: flex;

  & select {
    appearance: none;
    background: lightgray;
    border: 1px solid lightgray;
    border-radius: 4px;
    color: black;
    display: block;
    font-family: sans-serif;
    font-size: 12px;
    outline: 0;
    padding: 10px 36px 10px 12px;
    user-select: none;

    &:focus,
    &:active {
      border: 1px solid gray;
    }
  }
`;

const Heading = styled.div`
  color: black;
  font-family: sans-serif;
  font-size: 18px;
  margin-right: 24px;
`;

const Select = ({
  options,
  heading,
}: {
  options: Array<{ text: string, value: string }>,
  heading: string,
}) => (
  <SelectContainer>
    <Heading>{heading}</Heading>
    <select>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  </SelectContainer>
);

export default Select;
