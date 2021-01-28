/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { createApiRef } from '@backstage/core';

export const exploreToolsConfigRef = createApiRef<ExploreToolsConfig>({
  id: 'plugin.explore.toolsconfig',
  description: 'Used to configure tools displayed in the explore plugin',
});

export type ExploreTool = {
  title: string;
  description: string;
  url: string;
  image: string;
  tags?: string[];
  lifecycle?: string;
  newsTag?: string;
};

export interface ExploreToolsConfig {
  getTools: () => Promise<ExploreTool[]>;
}
