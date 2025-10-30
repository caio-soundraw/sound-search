import { List, Icon, ActionPanel, Action } from "@raycast/api";

export default function Command() {
  return (
    <List>
      <List.Item
        id="ravi"
        title="Ravi"
        icon={Icon.Person}
        accessories={[
          { text: "perfectbase", icon: Icon.Code },
          { text: "@RaviCoding", icon: Icon.AtSymbol },
        ]}
        actions={
          <ActionPanel>
            <Action.OpenInBrowser url="https://github.com/perfectbase" title="Open GitHub Profile" icon={Icon.Code} />
            <Action.OpenInBrowser url="https://x.com/RaviCoding" title="Open X Profile" icon={Icon.AtSymbol} />
          </ActionPanel>
        }
      />
      <List.Item
        id="caio"
        title="Caio"
        icon={Icon.Person}
        accessories={[
          { text: "clins1994", icon: Icon.Code },
          { text: "@clins1994", icon: Icon.AtSymbol },
        ]}
        actions={
          <ActionPanel>
            <Action.OpenInBrowser url="https://github.com/clins1994" title="Open GitHub Profile" icon={Icon.Code} />
            <Action.OpenInBrowser url="https://x.com/clins1994" title="Open X Profile" icon={Icon.AtSymbol} />
          </ActionPanel>
        }
      />
      <List.Item
        id="soundraw"
        title="Soundraw"
        icon={Icon.Music}
        accessories={[
          { text: "soundraw.io", icon: Icon.Globe },
          { text: "@soundrawus", icon: Icon.AtSymbol },
        ]}
        actions={
          <ActionPanel>
            <Action.OpenInBrowser url="https://soundraw.io" title="Open Website" icon={Icon.Globe} />
            <Action.OpenInBrowser url="https://x.com/soundrawus" title="Open X Profile" icon={Icon.AtSymbol} />
          </ActionPanel>
        }
      />
    </List>
  );
}
