import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
  Box,
} from "@mantine/core";
import { GoogleButton, TopNavbar } from "../../components";
// import { GoogleButton, TwitterButton } from '../SocialButtons/SocialButtons';

export function AuthScreen(props: PaperProps) {
  const [type, toggle] = useToggle(["login", "register"]);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      password: "",
      terms: true,
    },

    validate: {
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length <= 6
          ? "Password should include at least 6 characters"
          : null,
    },
  });

  return (
    <>
      <Box m={"lg"} maw={1200} ml={"auto"} mr={"auto"} p={10}>
        <TopNavbar />
      </Box>
      <Box maw={480} ml={"auto"} mr={"auto"} mt={200} mb={"auto"} p={10}>
        <Paper radius="md" p="xl" withBorder {...props}>
          <Text size="lg" weight={500} mb={20}>
            Welcome to MStudio, {type} with
          </Text>

          <form onSubmit={form.onSubmit(() => {})}>
            <Stack>
              {type === "register" && (
                <TextInput
                  label="Name"
                  placeholder="Your name"
                  value={form.values.name}
                  onChange={(event) =>
                    form.setFieldValue("name", event.currentTarget.value)
                  }
                  radius="sm"
                />
              )}

              <TextInput
                required
                label="Email"
                placeholder="hello@mantine.dev"
                value={form.values.email}
                onChange={(event) =>
                  form.setFieldValue("email", event.currentTarget.value)
                }
                error={form.errors.email && "Invalid email"}
                radius="md"
              />

              <PasswordInput
                required
                label="Password"
                placeholder="Your password"
                value={form.values.password}
                onChange={(event) =>
                  form.setFieldValue("password", event.currentTarget.value)
                }
                error={
                  form.errors.password &&
                  "Password should include at least 6 characters"
                }
                radius="sm"
              />

              {type === "register" && (
                <Checkbox
                  label="I accept terms and conditions"
                  checked={form.values.terms}
                  onChange={(event) =>
                    form.setFieldValue("terms", event.currentTarget.checked)
                  }
                />
              )}
            </Stack>

            <Group position="apart" mt="xl">
              <Anchor
                component="button"
                type="button"
                color="dimmed"
                onClick={() => toggle()}
                size="xs"
              >
                {type === "register"
                  ? "Already have an account? Login"
                  : "Don't have an account? Register"}
              </Anchor>
              <Button type="submit" radius="sm">
                {upperFirst(type)}
              </Button>
            </Group>

            <Divider label="Or continue with" labelPosition="center" my="lg" />
            <Group grow mb="md" mt="md">
              <GoogleButton radius="sm">Google</GoogleButton>
              {/* <TwitterButton radius="xl">Twitter</TwitterButton> */}
            </Group>
          </form>
        </Paper>
      </Box>
    </>
  );
}
