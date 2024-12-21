"use client";
import { Tabs, rem } from "@mantine/core";
import { ImageIcon, GithubIcon, Settings } from "lucide-react";
import Link from "next/link";

export default function TabBar() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs radius="md" defaultValue="workspace" className="absolute top-0">
      <Tabs.List grow justify="center">
        <Link href="/">
          <Tabs.Tab
            value="workspace"
            leftSection={<ImageIcon style={iconStyle} />}
          >
            Workspace
          </Tabs.Tab>
        </Link>
        <Link href="/settings">
          <Tabs.Tab
            value="settings"
            leftSection={<Settings style={iconStyle} />}
          >
            Settings
          </Tabs.Tab>
        </Link>
        <Link href="https://github.com/UdomUdom">
          <Tabs.Tab
            value="github"
            leftSection={<GithubIcon style={iconStyle} />}
          >
            Github Repo
          </Tabs.Tab>
        </Link>
      </Tabs.List>
    </Tabs>
  );
}
