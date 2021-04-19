import React from "react";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItemsData } from "../data/Sidebar";
import AddIcon from "@material-ui/icons/Add";
import { PinDropRounded } from "@material-ui/icons";
import db from "../firebase";
import { useHistory } from "react-router-dom";

function Sidebar(props) {
  const history = useHistory();

  const goToChannel = (id) => {
    if (id) {
      console.log(id);
      history.push(`/room/${id}`);
    }
  };

  const addChannel = () => {
    const promptName = prompt("Enter channel name");
    if (promptName) {
      db.collection("rooms").add({
        name: promptName,
      });
    }
  };

  return (
    <Container>
      <WorkspaceContianer>
        <Name>ThinkQuic</Name>

        <NewMessage>
          <AddCircleOutlineIcon />
        </NewMessage>
      </WorkspaceContianer>

      {/* -----2nd component start----- */}
      <MainChannels>
        {sidebarItemsData.map((item) => (
          <MainChannelitem>
            {item.icon}
            {item.text}
          </MainChannelitem>
        ))}
      </MainChannels>
      {/* -----2nd component end----- */}

      {/* -----3nd component start----- */}
      <ChannelsContainer>
        <NewChannelContianer>
          <div>Channels</div>

          <AddIcon onClick={addChannel} />
        </NewChannelContianer>

        <ChannelList>
          {props.rooms.map((item) => (
            <Channel onClick={() => goToChannel(item.id)}>
              # {item.name}
            </Channel>
          ))}
        </ChannelList>
      </ChannelsContainer>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  background: #3f0e40;
`;

const WorkspaceContianer = styled.div`
  color: white;
  height: 64px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  justify-content: space-between;
  border-bottom: 1px solid #532753;
`;

const Name = styled.div``;

const NewMessage = styled.div`
  width: 36px;
  height: 36px;
  background: white;
  color: #3f0e40;
  fill: #3f0e40;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
`;

const MainChannels = styled.div`
  padding-top: 20px;
`;

const MainChannelitem = styled.div`
  color: rgb(188, 171, 188);
  display: grid;
  grid-template-columns: 15% auto;
  height: 28px;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;

const ChannelsContainer = styled.div`
  color: rgb(188, 171, 188);
  margin-top: 10px;
`;

const NewChannelContianer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  padding-left: 19px;
  padding-right: 12px;
`;

const ChannelList = styled.div``;

const Channel = styled.div`
  height: 28px;
  display: flex;
  align-items: center;
  padding-left: 19px;
  cursor: pointer;
  :hover {
    background: #350d36;
  }
`;
