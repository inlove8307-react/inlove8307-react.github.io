"use client";

import React, { useEffect, useState } from "react";
import classnames from "classnames";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxGroup from "@/components/base/UxGroup";
import UxCard from "@/components/base/UxCard";
import UxButton from "@/components/base/UxButton";
/* DATA */
import data from '@/public/data/actor';

export default function Home() {
	const [isAvdbs, setIsAvdbs] = useState(false);
	const [status, setStatus] = useState([]);

	const handleClick = (target) => {
		setStatus(status.map((item, index) => index === target ? !item : item));
	};

	useEffect(() => {
		const initialStatus = new Array(data.length).fill(false);
		setStatus(initialStatus);
	}, []);

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<h3>
						<span>Actor</span>
					</h3>
				</UxSubject>
				<UxArticle className="h4 space">
					<UxContent>
						<UxGroup className="actor col3">
							{
								data.map((item, index) => (
									<UxCard
										key={index}
										className={classnames('actor', { avdbs: status[index] })}
									>
										<dl>
											<dt>
												{
													item.actor.map((item, actorIndex) => (
														<a
															key={actorIndex}
															href={status[index] ? item.avdbs?.link : item.link}
															className="actor-name"
															target="_blank"
														>
															<span className="actor-av123 ellipsis">{item.name}</span>
															<span className="actor-avdbs ellipsis">{item.avdbs?.name || item.name}</span>
														</a>
													))
												}
												<UxButton
													className="actor-trans"
													onClick={() => handleClick(index)}
												>
													<i className="icon mask reset" />
												</UxButton>
												{/* <span className="actor-info" onClick={() => handleClick(index)}>{item.link.length}</span> */}
											</dt>
											<dd>
												{
													item.link.map((link, linkIndex) => (
														<a
															key={linkIndex}
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