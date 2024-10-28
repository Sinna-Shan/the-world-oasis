/* eslint-disable no-unused-vars */
import { useState } from "react";
import CabinTable from "../features/cabins/CabinTable-v3";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm"
import AddCabin from "../features/cabins/AddCabin";

function Cabins() {
  
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>Filter / Sort</p>
    </Row>
    <Row>
        <CabinTable />
        <AddCabin />
    </Row>
    </>
  );
}

export default Cabins;
