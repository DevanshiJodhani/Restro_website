import { useEffect, useState } from 'react';
import styled from 'styled-components';

const reviews = [
  {
    name: 'Sarah Patel',
    role: 'Food Critic',
    image: '/images/user1.jpg',
    text: 'From the moment you step in, The Purple Bloom feels thoughtfully designed. The ambience is calm, the service is attentive without being intrusive, and every dish feels carefully crafted. It’s the kind of place you return to not just for food, but for the overall experience.',
    stars: 5,
  },
  {
    name: 'Rahul Mehta',
    role: 'Regular Guest',
    image: '/images/user2.jpg',
    text: 'What stood out to me most was the consistency. The quality of ingredients, presentation, and service remains excellent every time. It’s rare to find a restaurant that balances elegance and comfort this well.',
    stars: 4,
  },
  {
    name: 'Ananya Sharma',
    role: 'Lifestyle Blogger',
    image: '/images/user3.jpg',
    text: 'The Purple Bloom delivers a dining experience that feels refined yet welcoming. The interiors are beautiful, the flavours are balanced, and the atmosphere makes you want to slow down and enjoy every moment.',
    stars: 3,
  },
  {
    name: 'Karan Verma',
    role: 'Entrepreneur',
    image: '/images/user4.jpg',
    text: 'Attention to detail is what sets this place apart. From the lighting to the plating, everything feels intentional. It’s premium without being overwhelming — something very few restaurants manage.',
    stars: 4,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const review = reviews[index];

  return (
    <Section>
      <Overlay />

      <Heading>Guest Experiences</Heading>

      <GlassPanel>
        <Fade key={index}>
          <Profile>
            <Avatar src={review.image} alt={review.name} />
            <Meta>
              <Name>{review.name}</Name>
              <Role>{review.role}</Role>
            </Meta>
          </Profile>

          <Stars>
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={i < review.stars ? 'bx bxs-star' : 'bx bx-star'}
              />
            ))}
          </Stars>

          <Text>{review.text}</Text>
        </Fade>
      </GlassPanel>
    </Section>
  );
};

export default Testimonials;

const Section = styled.section`
  position: relative;
  padding: 150px 20px;
  background: url('/images/testimonial-section.png') center / cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.05),
      transparent 90%
    ),
    linear-gradient(to bottom, rgba(15, 5, 30, 0.5), rgba(15, 5, 30, 0.3));
  z-index: 1;
`;

const Heading = styled.h2`
  position: relative;
  z-index: 2;
  font-size: 36px;
  font-style: italic;
  color: #ffffff;
  margin-bottom: 90px;
  display: inline-block;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 100px;
    height: 2px;
    background: rgba(255, 255, 255, 0.5);
  }

  &::before {
    left: -120px;
  }

  &::after {
    right: -120px;
  }

  @media (max-width: 600px) {
    font-size: 28px;

    &::before,
    &::after {
      display: none;
    }
  }
`;

const GlassPanel = styled.div`
  position: relative;
  z-index: 2;
  max-width: 860px;
  width: 100%;
  padding: 60px 70px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.16),
    rgba(255, 255, 255, 0.06)
  );
  backdrop-filter: blur(26px);
  border-radius: 30px;
  box-shadow:
    0 45px 90px rgba(0, 0, 0, 0.6),
    inset 0 0 0 1px rgba(255, 255, 255, 0.18);

  @media (max-width: 600px) {
    padding: 25px 30px;
  }
`;

const Fade = styled.div`
  animation: contentFade 1.2s ease;

  @keyframes contentFade {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Avatar = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.45);
`;

const Meta = styled.div``;

const Name = styled.h4`
  font-size: 19px;
  font-weight: 600;
  color: #ffffff;
`;

const Role = styled.p`
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.65);
`;

const Stars = styled.div`
  color: #f5a623;
  font-size: 18px;
  margin-bottom: 32px;
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 1.8;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.92);

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 1.4;
  }
`;
