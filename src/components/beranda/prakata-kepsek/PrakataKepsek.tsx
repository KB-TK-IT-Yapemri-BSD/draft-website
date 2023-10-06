import Image from "next/image"

import Background from "../../layout/ui/Background"
import Wrapper from "../../layout/ui/Wrapper"
import KepsekImage from "./KepsekImage"
import KepsekText from "./KepsekText"

function PrakataKepsek() {
    return (
        <Background color="bg-grey">
            <Wrapper className="flex flex-col lg:flex-row">
                <KepsekImage />
                <KepsekText />
            </Wrapper>
        </Background>
    )
}

export default PrakataKepsek
