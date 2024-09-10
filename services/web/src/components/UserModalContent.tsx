import { Grid, Skeleton, Stack, Text ,ThemeIcon} from "@mantine/core";
import { trpc } from "../utils/trpc";
import { IconClock, IconPhone, IconRun } from "@tabler/icons-react";


type Props = {
  userId: string;
};

export function UserModalContent(props: Props) {
  const { userId } = props;
  const { data: user, isPending } = trpc.users.getUserById.useQuery(userId);
  const isLoading = isPending || !user;
  return (
    <>
      <Grid>
        <Grid.Col span={4}>
          <Text c="dimmed">部署</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          {isLoading ? (
            <Skeleton>
              <Text></Text>
            </Skeleton>
          ) : (
            <Stack gap="xs">
              {user.Divisions.map((division) => (
                <Text key={division.id}>{division.name}</Text>
              ))}
            </Stack>
          )}
        </Grid.Col>
        <Grid.Col span={4}>
        <ThemeIcon variant="tertiary" size="xs">
                  <IconPhone />
                </ThemeIcon>
        </Grid.Col>
        <Grid.Col span={8}>
          {isLoading ? (
            <Skeleton>
              <Text>読み込み中</Text>
            </Skeleton>
          ) : (
            <Text>{user.extension}</Text>
          )}
        </Grid.Col>
        <Grid.Col span={4}>
          <Text c="dimmed">メールアドレス</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          {isLoading ? (
            <Skeleton>
              <Text>読み込み中</Text>
            </Skeleton>
          ) : (
            <Text>{user.email}</Text>
          )}
        </Grid.Col>
        <Grid.Col span={4}>
          <Text c="dimmed">緊急連絡先</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          {isLoading ? (
            <Skeleton>
              <Text>読み込み中</Text>
            </Skeleton>
          ) : (
            <Text>{user.emergency}</Text>
          )}
        </Grid.Col>
        <Grid.Col span={4}>
          <Text c="dimmed">コメント</Text>
        </Grid.Col>
        <Grid.Col span={8}>
          {isLoading ? (
            <Skeleton>
              <Text>読み込み中</Text>
            </Skeleton>
          ) : (
            <Text style={{whiteSpace : "pre-wrap"}}>{user.comment}</Text>
          )}
        </Grid.Col>
      </Grid>
    </>
  );
}
