import { useArtworkContext } from "@contexts/main/artwork.context";

import {
  CharacterImage,
  CharacterImageContainer,
  CharacterImageWrapper,
} from "@styles/main/artwork/character-image.style";

import type { FC } from "react";

interface ArtworkCharacterImageProps {
  name: string;
  path: string;
  className?: string;
  translateX: {
    default: number;
    tablet: number;
    mobileWide: number;
    mobile: number;
    mobileNarrow: number;
  };
}

const ArtworkCharacterImage: FC<ArtworkCharacterImageProps> = ({
  name,
  path,
  className,
  translateX,
}) => {
  const { charImageWrapperRef } = useArtworkContext();

  return (
    <CharacterImageContainer>
      <CharacterImageWrapper
        ref={charImageWrapperRef}
        className={className}
        $translateX={translateX}
      >
        <CharacterImage src={path} alt={`${name} 스탠딩 이미지`} />
      </CharacterImageWrapper>
    </CharacterImageContainer>
  );
};

export default ArtworkCharacterImage;
