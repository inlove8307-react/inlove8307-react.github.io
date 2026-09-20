"use client";

import React, { useState } from "react";
import classnames from "classnames";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxCard from "@/components/base/UxCard";
import UxCheckbox from "@/components/base/UxCheckbox";
/* DATA */
import data from '@/public/data/actor';

export default function Home() {
	const [isAvdbs, setIsAvdbs] = useState(false);

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3 className="row between">
						<span>Actor</span>
						<UxCheckbox
							role="switch"
							checked={isAvdbs}
							onChange={(checked) => setIsAvdbs(checked)}
						/>
					</h3>
				</UxSubject>
				<UxArticle className="h4 space">
					<UxContent>
						<UxGroup className="actor col3">
							{
								data.map((item, index) => (
									<UxCard
										key={index}
										className={classnames('actor', { avdbs: isAvdbs })}
									>
										<dl>
											<dt>
												{
													item.actor.map((item, index) => (
														<a
															key={index}
															href={isAvdbs ? item.avdbs?.link : item.link}
															className="actor-name"
															target="_blank"
														>
															<span>{item.name}</span>
															<span className="actor-av123">{item.name}</span>
															<span className="actor-avdbs">{item.avdbs?.name || item.name}</span>
														</a>
													))
												}
												<span className="actor-info">{item.link.length}</span>
											</dt>
											<dd>
												{
													item.link.map((link, index) => (
														<a
															key={index}
															href={link}
															className="actor-link"
															target="_blank"
														>
															{link.split('/').pop().toUpperCase()}
														</a>
													))
												}
											</dd>
										</dl>
									</UxCard>
								))
							}
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxArticle>
		</UxSection>
	);
};