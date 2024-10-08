import React, {useEffect, useState} from "react";

import SectionTitle from "@components/commons/SectionTitle";

import {
    StudioToonBox,
    StudioToonWrapper,
    SubTitle,
    ToonDetail,
    ToonItemWrapper,
    ToonItem,
    ToonInfo,
    ToonVisual
} from "@styles/intro/index.style";
import Modal from "@components/commons/Modal";


function StudioToon({ scrollY }: { scrollY: number }) {

    const [childrenCount, setChildrenCount] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemId, setItemId] = useState(0);

    useEffect(() => {
        const toonItemWrapper = document.querySelector("#toon-item-wrapper");
        if (toonItemWrapper) {
            const count = toonItemWrapper.children.length;
            setChildrenCount(count);
            console.log("childrenCount: ", count);
        }
    }, []);

    function modalOpen(itemNumber: number, ) {
        if(isModalOpen) {
            setIsModalOpen(false);
        } else {
            setIsModalOpen(true);
            setItemId(itemNumber);
        }
    }

    return (
        <StudioToonBox>
            <Modal type="toon" itemId={itemId} modalOpen={isModalOpen} setModalOpen={setIsModalOpen} />

            <StudioToonWrapper>
                <SectionTitle text={{ title: "Studio EDDA", subTitle: "About", }} direction="left" />

                <SubTitle>
                    스튜디오 에다의 개발 트리비아
                </SubTitle>

                <ToonDetail>
                    모두가 기다리는 동안 스튜디오 에다에서는 <br/>
                    어떤 일이 일어나고 있을까요? <br/>
                    스튜디오 에다의 좌충우돌 개발일지, <br/>
                    4컷 만화에 담았습니다!
                </ToonDetail>

                <ToonItemWrapper childrenCount={childrenCount} id="toon-item-wrapper">
                    <ToonItem onClick={() => modalOpen(0)}>
                        <img src="/images/toon-thumb01.png" alt="Studio EDDA" />
                        <ToonInfo>
                            <p>
                                <strong>1화</strong>
                                <span>DXI 개발하는많화</span>
                            </p>
                        </ToonInfo>
                    </ToonItem>
                    <ToonItem onClick={() => modalOpen(1)}>
                        <img src="/images/toon-thumb02.png" alt="Studio EDDA" />
                        <ToonInfo>
                            <p>
                                <strong>2화</strong>
                                <span>로키 디자인 회의</span>
                            </p>
                        </ToonInfo>
                    </ToonItem>
                </ToonItemWrapper>
            </StudioToonWrapper>
            <ToonVisual />
        </StudioToonBox>
    );
}

export default StudioToon;