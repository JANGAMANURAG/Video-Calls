import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
function Room() {
    const { roomId } = useParams();
    const meeting = async (element) => {
        const appID = 1948604458;
        const serverSecret = "c377de94a1a0476b5912067221413c9e";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            "Rolex"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: "Copy Link",
                url:`http://localhost:3000/room/${roomId}`
              }
                
            ],
            scenario: {
                  mode:ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton:false

        })
    }
  return (
    <div>
          <div ref={meeting}></div>

    </div>
  )
}

export default Room
