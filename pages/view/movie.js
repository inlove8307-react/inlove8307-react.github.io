"use client";

import React, { useEffect, useState } from "react";
import { getRandomChar } from "@/utils/core";
import classnames from "classnames";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxInput from "@/components/base/UxInput";
import UxGroup from "@/components/base/UxGroup";
import UxCard from "@/components/base/UxCard";
/* DATA */
import data from '@/public/data/movie';

export default function Home() {
	const [actorData, setActorData] = useState([]);
	const [filterData, setFilterData] = useState([]);
	const [search, setSearch] = useState('');

	const handleSearch = (value) => {
		setSearch(value);
	};

	useEffect(() => {
		const array = actorData.filter((item) => {
			return item.name.toLowerCase().includes(search.toLowerCase());
		});

		setFilterData(array);
	}, [search]);

	useEffect(() => {
		if (!actorData.length) {
			setActorData(data);
		}

		if (actorData.length) {
			setFilterData(actorData);
		}
	}, [actorData]);

	return (
		<UxSection>
			<UxArticle className="h3">
				<UxSubject className="space">
					<UxInput
						role="search"
						placeholder="검색어를 입력하세요"
						value={search}
						clear
						onChange={handleSearch}
					/>
				</UxSubject>
				<UxArticle className="h4 space">
					<UxContent>
						<UxGroup className="count">
							<p>총 <em>{filterData.length}</em> 건</p>
						</UxGroup>
						<UxGroup className="movie col3">
							{
								filterData.map((item) => (
									<UxCard
										key={item.id}
										className="movie"
									>
										<dl>
											<dt className="subject">
												<a
													className="name"
													href={`https://www.avdbs.com/menu/dvd.php?dvd_idx=${item.id}`}
													target="_blank"
												>
													{item.name}
												</a>
											</dt>
											<dd className="details">
												<dl className="define column">
													<dt>title</dt>
													<dd className="ellipsis">{item.title}</dd>
												</dl>
												<dl className="define column">
													<dt>story</dt>
													<dd className="ellipsis">{item.story}</dd>
												</dl>
												<dl className="define column">
													<dt>producer</dt>
													<dd className="ellipsis">{item.producer}</dd>
												</dl>
												<dl className="define column">
													<dt>publisher</dt>
													<dd className="ellipsis">{item.publisher}</dd>
												</dl>
												<dl className="define column">
													<dt>series</dt>
													<dd className="ellipsis">{item.series}</dd>
												</dl>
												<dl className="define column">
													<dt>director</dt>
													<dd className="ellipsis">{item.director}</dd>
												</dl>
												<dl className="define">
													<dt>runtime</dt>
													<dd>{item.runtime}</dd>
												</dl>
												<dl className="define">
													<dt>release</dt>
													<dd>{item.release}</dd>
												</dl>
												<dl className="define">
													<dt>id</dt>
													<dd>{item.id}</dd>
												</dl>
												<ul className="list cast">
													{
														item.cast.map((item, index) => (
															<li
																key={index}
																className="bl pound"
															>
																<a
																	className="cast"
																	href={`https://www.avdbs.com/menu/actor.php?actor_idx=${item.id}`}
																	target="_blank"
																>
																	<em className="red">{item.name}</em>
																</a>
															</li>
														))
													}
												</ul>
												<ul className="list category">
													{
														item.category.map((item, index) => (
															<li
																key={index}
																className="bl pound"
															>
																<a
																	className="category"
																	href={`https://www.avdbs.com/menu/genre_av.php?menu=${item.menu}&cate=${item.cate}`}
																	target="_blank"
																>
																	<em className="blue">{item.name}</em>
																</a>
															</li>
														))
													}
												</ul>
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