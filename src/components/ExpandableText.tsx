import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if(!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const shortText = children.substring(0, limit) + " ...";
  return (
    <Text>
      {expanded ? children : shortText}
      <Button
        size="xl"
        colorScheme="yellow"
        marginLeft={1}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Read Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
