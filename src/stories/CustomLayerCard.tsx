import React, { FC, useState } from 'react';

//** Material UI imports */
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';

interface CardMediaTypes {
  height?: string;
  checked?: boolean;
  hover?: 'onHover' | 'offHover'; // I added this because i dont know if you want to make hover an active parameter in storybook
}

const CustomLayerCard: FC<CardMediaTypes> = ({
  checked = false,
  height = '100px',
  hover,
}) => {
  const [checkIt, setCheckIt] = useState<boolean>(false); // **without storybook i would use useState to toggle the checkbox
  console.log({ checkIt });
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckIt(e.target.checked); // ** This will serve as the onChange handle, it works perfectly, you can check the console if you render checktIt instead of checked.
  };

  return (
    <CustomCard>
      <CardMedia
        component="img"
        height={height}
        image="https://s3-alpha-sig.figma.com/img/ccd2/e018/41b54f8069afba28221051e1bc437df1?Expires=1653868800&Signature=SnndC7ZPQ30~QUbpTWf1ONmKPWEtGB2ub7pllqATGhzqaBJxvUsOyoH3ZTEInn2H11CWGgorh48gcCgUnricfMmYxXCk78e6CJGjcqNC3qkv8rMUBF1oxpzaXYI4OdI4SDTnxKCAfqlVea3N-74ztw9x26kAmJL-lRE~YTMjLDA4KstIeoBtkM8~ZDG38kjnSngawAWu8fvY0t1ipGfWERk0B43y6RC33EW6vXQWeNW~AAeO9IA-LCj6oagjnihqsx4VyVl7EuUVInMADEPw3SLUaHYV9JNT43YonpprZd1UxQZErVosN-P9PHN6DlwT75Lxf4RXcBjH3gu132FiPg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        alt="mapping image"
      />

      <CardActions>
        <FormControlLabel
          label={<CustomText>Flood zone 3</CustomText>}
          control={
            <CustomCheckbox checked={checked} onChange={handleChecked} />
          }
        />
      </CardActions>
    </CustomCard>
  );
};

export default CustomLayerCard;

//** Styled component was used due to what you wrote in the job description, I also prefer it to emotion */
const CustomCard = styled(Card)`
  max-width: 229px;
  max-max-height: 150px;
  border-radius: 10px;
  border: none;

  &:hover {
    border: 1px solid #65e9d9;
    transform: translate(0%, 2%); // Decided to add little animation
    transition: 0.3s ease-out;
  }
`;

const CustomCheckbox = styled(Checkbox)`
  color: #616161;
  padding: 10px;
`;

const CustomText = styled(Typography)`
  color: #1b1b1b;
  font-family: Plus Jakarta Sans;
  font-style: normal;
  font-size: 14px;
  letter-spacing: 0.17px;
`;
