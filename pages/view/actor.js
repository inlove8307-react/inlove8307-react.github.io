"use client";

import React, { useEffect, useState } from "react";
/* LAYOUT */
import UxSection from "@/components/layout/UxSection";
import UxArticle from "@/components/layout/UxArticle";
import UxSubject from "@/components/layout/UxSubject";
import UxContent from "@/components/layout/UxContent";
/* COMPONENT */
import UxInput from "@/components/base/UxInput";
import UxGroup from "@/components/base/UxGroup";
import UxCard from "@/components/base/UxCard";
import UxCollapse from "@/components/base/UxCollapse";
/* DATA */
import actor from '@/public/data/actor';

export default function Home() {
	const [actorData, setActorData] = useState([]);
	const [filterData, setFilterData] = useState([]);
	const [search, setSearch] = useState('');

	const handleSearch = (value) => {
		setSearch(value);
	};

	const getAge = (date) => {
		const today = new Date();
		const birth = new Date(date.replace(/\./g, '-'));
		const todayYear = today.getFullYear();
		const birthYear = birth.getFullYear();
		const korean = todayYear - birthYear + 1;
		const diff = today.getMonth() - birth.getMonth();
		let age = todayYear - birthYear;

		if (diff < 0 || (diff === 0 && today.getDate() < birth.getDate())) {
			age--;
		}

		return { age, korean };
	};

	useEffect(() => {
		const array = actorData.filter((item) => {
			return item.name.en.toLowerCase().includes(search.toLowerCase());
		});

		setFilterData(array);
	}, [search]);

	useEffect(() => {
		if (!actorData.length) {
			setActorData(actor);
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
						<UxGroup className="actor col3">
							{
								filterData.map((item) => {
									const { age, korean } = getAge(item.birth);

									return (
										<UxCard
											key={item.id}
											className="actor"
										>
											<UxCollapse
												className="actor"
												expanded
											>
												<div slot="summary">
													<a
														className="name"
														href={`https://www.avdbs.com/menu/actor.php?actor_idx=${item.id}`}
														target="_blank"
													>
														<span>{item.name.en}</span>
														<i className="icon mask link orange x18" />
													</a>
													<span className="count">{item.movie.length}</span>
												</div>
												<div slot="details">
													<dl className="define column">
														<dt>title</dt>
														<dd className="ellipsis">
															{item.title}
														</dd>
													</dl>
													<dl className="define column">
														<dt>description</dt>
														<dd className="ellipsis">
															{item.desc}
														</dd>
													</dl>
													<dl className="define name">
														<dt>name</dt>
														<dd>
															<span>{item.name.kr}</span>
															<span>{item.name.en}</span>
															<span>{item.name.cn}</span>
															{item.name.other.map((item, index) => (
																<span key={index}>{item}</span>
															))}
														</dd>
													</dl>
													<dl className="define birth">
														<dt>birth</dt>
														<dd>
															{item.birth && <span>{item.birth}</span>}
															{item.birth && <span>{korean}</span>}
															{item.birth && <span>{age}</span>}
														</dd>
													</dl>
													<dl className="define">
														<dt>height</dt>
														<dd>{item.height}</dd>
													</dl>
													<dl className="define size">
														<dt>size</dt>
														<dd>
															{item.size.bust && <span>{item.size.bust}</span>}
															{item.size.waist && <span>{item.size.waist}</span>}
															{item.size.hips && <span>{item.size.hips}</span>}
														</dd>
													</dl>
													<dl className="define">
														<dt>bra</dt>
														<dd>{item.bra}</dd>
													</dl>
													<dl className="define">
														<dt>debut</dt>
														<dd>{item.debut}</dd>
													</dl>
												</div>
											</UxCollapse>
											{item.movie.map(item => (
												<UxCollapse
													key={item.id}
													className="movie"
												>
													<div slot="summary">
														<a
															className="name"
															href={`https://www.avdbs.com/menu/dvd.php?dvd_idx=${item.id}`}
															target="_blank"
														>
															<span>{item.name}</span>
															<i className="icon mask link orange x18" />
														</a>
														<a
															className="name"
															href={`https://123av.com/ko/v/${item.name}`}
															target="_blank"
														>
															<span>123AV</span>
															<i className="icon mask link orange x18" />
														</a>
														<a
															className="name"
															href={`https://missav123.com/ko/${item.name}`}
															target="_blank"
														>
															<span>MISSAV</span>
															<i className="icon mask link orange x18" />
														</a>
													</div>
													<div slot="details">
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
																			{item.name}
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
																			{item.name}
																		</a>
																	</li>
																))
															}
														</ul>
													</div>
												</UxCollapse>
											))}
										</UxCard>
									);
								})
							}
						</UxGroup>
					</UxContent>
				</UxArticle>
			</UxArticle>
		</UxSection>
	);
};