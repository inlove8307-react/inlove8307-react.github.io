"use client";

import React from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxCard from "@/components/base/UxCard";
/* DATA */
import data from '@/public/data/actor';

export default function Home() {
	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>Actor</h3>
				</UxSubject>
				<UxArticle className="h4 space">
					<UxContent>
						<UxGroup className="actor col3">
							{
								data.map((item, index) => (
									<UxCard
										key={index}
										className="actor"
									>
										<dl>
											<dt>
												{
													item.actor.map((item, index) => (
														<a
															key={index}
															href={item.link}
															className="actor-name"
															target="_blank"
														>
															{item.name}
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