<script lang="ts">
  import type { TODOItem } from "../util/types";

  export let item: TODOItem
</script>

<div>
  <span>{item.body}</span>
</div>